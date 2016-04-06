<?php

class UserController extends BaseController {

    public $restful = true;

    public function index() {
        $userCollection = User::all();

        if (count($userCollection) > 0) {
            foreach ($userCollection as &$user) {
                if ($user->team_id != null) {
                    $teamObject = Team::where('_id', '=', $user->team_id)->first();
                    $user->team_name = $teamObject->name;
                } else {
                    $user->team_name = 'No Team';
                }
            }
        }
        return $userCollection;
    }

    /**
     * 	Create a new user account
     */
    public function store() {

        $input = Input::all();
        $user = '';

        $validator = Validator::make($input, User::getCreateRules());

        if ($validator->passes()) {

            $user = new User();
            $user->email = Input::has('email') ? $input['email'] : '';
            $user->name = Input::has('name') ? $input['name'] : '';
            $user->password = Hash::make($input['password']);
            $user->phone_number = Input::has('phone_number') ? $input['phone_number'] : '';
            
            $user->team_id = Input::has('team_id') ? $input['team_id'] : null;
            $user->role = Input::has('role') ? $input['role'] : 'user';
            
            if (!$user->save())
                return ApiResponse::errorInternal('An error occured. Please, try again.');
        }
        else {
            return ApiResponse::validation($validator);
        }

        Log::info('<!> Created : ' . $user);

        $userReturn = User::where('email', '=', $user->email)->first();

        return ApiResponse::json($userReturn->toArray());
    }
    
    public function update($id) {

        $input = Input::all();
        $user = '';

        $validator = Validator::make($input, User::getUpdateRules($id->_id));

        if ($validator->passes()) {

            $user = User::where('_id', '=', $id->_id)->first();
            
            if ( !($user instanceof User) ) {
                return ApiResponse::errorNotFound("User does not exist!");
            }
            
            $user->email = Input::has('email') ? $input['email'] : '';
            $user->name = Input::has('name') ? $input['name'] : '';
            $user->phone_number = Input::has('phone_number') ? $input['phone_number'] : '';
            
            $user->team_id = Input::has('team_id') ? $input['team_id'] : null;
            $user->role = Input::has('role') ? $input['role'] : 'user';
            
            if (!$user->save())
                return ApiResponse::errorInternal('An error occured. Please, try again.');
        }
        else {
            return ApiResponse::validation($validator);
        }

        Log::info('<!> Updated : ' . $user);

        $userReturn = User::where('email', '=', $user->email)->first();

        return ApiResponse::json($userReturn->toArray());
    }  

    public function password($id) {

        $input = Input::all();
        $user = '';

        $validator = Validator::make($input, User::getChangePasswordRules());

        if ($validator->passes()) {

            $user = User::where('_id', '=', $id)->first();
            
            if ( !($user instanceof User) ) {
                return ApiResponse::errorNotFound("User does not exist!");
            }
            
            if (Hash::check($input['old_password'], $user->password)) {
                $user->password = Hash::make($input['new_password']);
            } else {
                return ApiResponse::errorNotFound("The old password is incorrect!");
            }
            
            if (!$user->save())
                return ApiResponse::errorInternal('An error occured. Please, try again.');
        }
        else {
            return ApiResponse::validation($validator);
        }

        Log::info('<!> Updated : ' . $user);

        $userReturn = User::where('email', '=', $user->email)->first();

        return ApiResponse::json($userReturn->toArray());
    }      

    /**
     * 	Authenticate a registered user, with its email and password
     */
    public function authenticate() {

        $input = Input::all();
        $validator = Validator::make($input, User::getAuthRules());

        if ($validator->passes()) {

            $user = User::where('email', '=', $input['email'])->first();
            if (!($user instanceof User)) {
                return ApiResponse::errorUnauthorized("User is not registered.");
            }

            if (Hash::check($input['password'], $user->password)) {

                $device_id = Input::has('device_id') ? $input['device_id'] : '';
                $device_type = Input::has('device_type') ? $input['device_type'] : '';
                $device_token = Input::has('device_token') ? $input['device_token'] : '';

                $token = $user->login($device_id, $device_type, $device_token);

                Log::info('<!> Device Token Received : ' . $device_token . ' - Device ID Received : ' . $device_id . ' for user id: ' . $token->user_id);
                Log::info('<!> Logged : ' . $token->user_id . ' on ' . $token->device_os . '[' . $token->device_id . '] with token ' . $token->key);

                $token->user = $user->toArray();
                $token = ApiResponse::json($token, '202');
            } else
                $token = ApiResponse::errorUnauthorized("Incorrect password.");

            return $token;
        }
        else {
            return ApiResponse::validation($validator);
        }
    }

    /**
     * 	Authenticate a user based on Facebook access token. If the email address from facebook is already in the database, 
     * 	the facebook user id will be added. 
     * 	If not, a new user will be created with a random password and user info from facebook.
     */
    public function authenticateFacebook() {

        $input = Input::all();
        $validator = Validator::make($input, User::getAuthFBRules());

        if ($validator->passes()) {

            $facebook = new FacebookWrapper();
            $facebook->loginAsUser($input['access_token']);

            $profile = $facebook->getMe();

            if (is_array($profile) && isset($profile['error']))
                return json_encode($profile);

            Log::info(json_encode($profile->asArray()));

            $user = User::where('facebook_id', '=', $profile->getId())->first();

            if (!($user instanceof User))
                $user = User::where('email', '=', $profile->getProperty('email'))->first();

            if (!($user instanceof User)) {
                // Create an account if none is found                                

                $user = new User();
                $user->name = $profile->getName();
                $user->email = $profile->getProperty('email');
                $user->password = Hash::make(uniqid());
            }

            $user->facebook_id = $profile->getId();
            $user->save();

            $device_id = Input::has('device_id') ? $input['device_id'] : '';
            $device_type = Input::has('device_type') ? $input['device_type'] : '';
            $device_token = Input::has('device_token') ? $input['device_token'] : '';

            $token = $user->login($device_id, $device_type, $device_token);

            Log::info('<!> Device Token Received : ' . $device_token . ' - Device ID Received : ' . $device_id . ' for user id: ' . $token->user_id);
            Log::info('<!> FACEBOOK Logged : ' . $token->user_id . ' on ' . $token->device_os . '[' . $token->device_id . '] with token ' . $token->token);

            $token = $token->toArray();
            $userReturn = User::where('email', '=', $user->email)->first();
            $token['user'] = $userReturn->toArray();

            Log::info(json_encode($token));

            return ApiResponse::json($token);
        } else {
            return ApiResponse::validation($validator);
        }
    }

    /**
     * 	Logout a user: remove the specified active token from the database
     * 	@param user User
     */
    public function logout($user) {

        if (!Input::has('token'))
            return ApiResponse::errorUnauthorized('No token given.');

        $input_token = Input::get('token');
        $token = Token::where('key', '=', $input_token)->first();

        if (empty($token))
            return ApiResponse::errorNotFound('No active session found.');

        if ($token->user_id !== $user->_id)
            return ApiResponse::errorForbidden('You do not own this token.');

        if ($token->delete()) {
            Log::info('<!> Logged out from : ' . $input_token);
            return ApiResponse::json('User logged out successfully.', '202');
        } else
            return ApiResponse::errorInternal('User could not log out. Please try again.');
    }

    /**
     * 	Show all active sessions for the specified user, check access rights
     */
    public function sessions() {

        if (!Input::has('token'))
            return ApiResponse::errorUnauthorized('No token given.');

        $user = Token::userFor(Input::get('token'));

        if (empty($user))
            return ApiResponse::errorNotFound('User not found.');

        $user->sessions;

        return ApiResponse::json($user);
    }

    /**
     * 	Initiate request for new password
     */
    public function forgot() {
        $input = Input::all();
        $validator = Validator::make($input, User::getForgotRules());

        if ($validator->passes()) {

            $user = User::where('email', '=', $input['email'])->first();
            $reset = $user->generateResetKey();

            $sent = false;

            if ($reset->save()) {
                Log::info($reset);
                $sent = EmailRunner::send('lost_password', $reset);
            }

            if ($sent)
                return ApiResponse::json('Email sent successfully.');
            else
                return ApiResponse::json('An error has occured, the Email was not sent.', 500);
        }
        else {
            return ApiResponse::validation($validator);
        }
    }

    /**
     * 	Send reset password form with KEY
     */
    public function resetPassword() {
        $input = Input::all();
        $validator = Validator::make($input, User::getResetRules());

        if ($validator->passes()) {
            $reset = ResetKey::where('key', $input['key'])->first();
            $user = User::where('email', $input['email'])->first();

            if (!($reset instanceof ResetKey))
                return ApiResponse::errorUnauthorized("Invalid reset key.");

            if ($reset->user_id != $user->_id)
                return ApiResponse::errorUnauthorized("Reset key does not belong to this user.");

            if ($reset->isExpired()) {
                $reset->delete();
                return ApiResponse::errorUnauthorized("Reset key is expired.");
            }

            $user = $reset->user;

            $user->password = Hash::make($input['password']);
            $user->save();

            $reset->delete();

            return ApiResponse::json('Password reset successfully!');
        } else {
            return ApiResponse::validation($validator);
        }
    }

    /**
     * 	Show all active sessions for the specified user, no access right check
     * 	@param user User
     */
    public function show($user) {
        $user->sessions;
        // Log::info('<!> Showing : '.$user );
        return $user;
    }

    public function missingMethod($parameters = array()) {
        return ApiResponse::errorNotFound('Sorry, no method found');
    }

    public function destroy($userDelete) {
        $token = Input::get('token');
        $tokenObject = Token::where('key', '=', $token)->first();

        if ($tokenObject->user_id == $userDelete->_id) {
            return ApiResponse::errorForbidden("You cannot delete yourself!");
        }
        
        $allTokenObjectDelete = Token::where('user_id', '=', $userDelete->_id)->delete();
        $userDelete->delete();

        return ApiResponse::json('Successfully delete selected user', 200);
    }

}
