<?php

class TeamController extends BaseController {

    public $restful = true;

    public function index() {
        return Team::all();
    }
    
    /**
    *	Create a new team
    */
    public function store() {

        $input = Input::all();
        $team = '';

        $validator = Validator::make($input, Team::getCreateRules());

        if ($validator->passes()) {

            $team = new Team();
            $team->name = Input::has('name') ? $input['name'] : '';
            $team->slogan = Input::has('slogan') ? $input['slogan'] : '';
            
            if (!$team->save())
                return ApiResponse::errorInternal('An error occured. Please, try again.');
        }
        else {
            return ApiResponse::validation($validator);
        }

        Log::info('<!> Created : ' . $team);

        $teamReturn = Team::where('_id', '=', $team->getKey())->first();

        return ApiResponse::json($teamReturn->toArray());
    }
    
    public function statistic() {
        $allTeamObject = Team::all();
        foreach ($allTeamObject as &$singleTeam) {
            $singleTeam->memberCount = count($singleTeam['children']);
        }
        return $allTeamObject;
    }
    
    public function destroy($id) { 
        $teamObject = Team::where('_id', '=', $id)->first();
        
        if ( !($teamObject instanceof Team) ) {
            return ApiResponse::errorNotFound("Team does not exist!");
        }
        
        // Remove relationship from user first
        $allUserObject = User::withTrashed()->where('team_id', '=', $id)->get();        
        
        foreach ($allUserObject as $singleUser) {
            $singleUser->team_id = null;
            $singleUser->save();
        }
        
        // Secondly Remove relationship from topic
        $allTopicObject = Topic::where('team_id', '=', $id)->get();
        
        foreach ($allTopicObject as $singleTopic) {
            $singleTopic->team_id = null;
            $singleTopic->save();
        }
        
        $teamObject->delete();
        
        return ApiResponse::json('Successfully delete selected team', 200);
    }
    
    public function update($id) {   
        
        $input = Input::all();
        $team = '';

        $validator = Validator::make($input, Team::getUpdateRules($id));

        if ($validator->passes()) {

            $team = Team::where('_id', '=', $id)->first();
            
            if ( !($team instanceof Team) ) {
                return ApiResponse::errorNotFound("Team does not exist!");
            }

            $team->name = Input::has('name') ? $input['name'] : '';
            $team->slogan = Input::has('slogan') ? $input['slogan'] : '';
            
            if (!$team->save())
                return ApiResponse::errorInternal('An error occured. Please, try again.');
        }
        else {
            return ApiResponse::validation($validator);
        }

        $teamReturn = Team::where('_id', '=', $team->getKey())->first();
        
        Log::info('<!> Updated : ' . $teamReturn);

        return ApiResponse::json($teamReturn->toArray());
        
    }
    

}
