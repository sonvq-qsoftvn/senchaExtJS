<?php

class TopicController extends BaseController {

    public $restful = true;

    public function index() {
        return Topic::all();
    }
    
    /**
    *	Create a new topic
    */
    public function store() {

        $input = Input::all();
        $topic = '';

        $validator = Validator::make($input, Topic::getCreateRules());

        if ($validator->passes()) {

            $topic = new Topic();
            $topic->name = Input::has('name') ? $input['name'] : '';
            $topic->team_id = Input::has('team_id') ? $input['team_id'] : null;
            
            if (!$topic->save())
                return ApiResponse::errorInternal('An error occured. Please, try again.');
        }
        else {
            return ApiResponse::validation($validator);
        }

        Log::info('<!> Created : ' . $topic);

        $topicReturn = Topic::where('_id', '=', $topic->getKey())->first();

        return ApiResponse::json($topicReturn->toArray());
    }
    
    public function destroy($id) { 
        $topicObject = Topic::where('_id', '=', $id)->first();
        
        if ( !($topicObject instanceof Topic) ) {
            return ApiResponse::errorNotFound("Topic does not exist!");
        }                
        
        $topicObject->delete();
        
        return ApiResponse::json('Successfully delete selected topic', 200);
    }
    
    public function update($id) {   
        
        $input = Input::all();
        $topic = '';

        $validator = Validator::make($input, Topic::getUpdateRules($id));

        if ($validator->passes()) {

            $topic = Topic::where('_id', '=', $id)->first();
            
            if ( !($topic instanceof Topic) ) {
                return ApiResponse::errorNotFound("Topic does not exist!");
            }

            $topic->name = Input::has('name') ? $input['name'] : '';
            $topic->team_id = Input::has('team_id') ? $input['team_id'] : null;
            
            if (!$topic->save())
                return ApiResponse::errorInternal('An error occured. Please, try again.');
        }
        else {
            return ApiResponse::validation($validator);
        }

        $topicReturn = Topic::where('_id', '=', $topic->getKey())->first();
        
        Log::info('<!> Updated : ' . $topicReturn);

        return ApiResponse::json($topicReturn->toArray());
        
    }
    

}
