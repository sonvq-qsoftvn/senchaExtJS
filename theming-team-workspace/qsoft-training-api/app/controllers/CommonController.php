<?php

class CommonController extends BaseController {

    public $restful = true;

    public function overview() {
        $arrayReturn = array();
        $arrayUser = $arrayTeam = $arrayTopic = array();

        $arrayUser['name'] = 'User'; 
        $arrayUser['count'] = count(User::all());
        $arrayReturn[] = $arrayUser;

        $arrayTeam['name'] = 'Team';
        $arrayTeam['count'] = count(Team::all());
        $arrayReturn[] = $arrayTeam;

        $arrayTopic['name'] = 'Topic';
        $arrayTopic['count'] = count(Topic::all());
        $arrayReturn[] = $arrayTopic;

        return ApiResponse::json($arrayReturn);
    }

}
