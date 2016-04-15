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

    public function scorechart() {
        $arrayReturn = array();
        $allUserCount = count(User::all());

        $allUserObject = User::all();

        $arrayScoreRange = array(
            '0.0 - 1.9' => 0, 
            '2.0 - 3.9' => 0, 
            '4.0 - 5.9' => 0, 
            '6.0 - 7.9' => 0, 
            '8.0 - 8.9' => 0, 
            '9.0 - 10.0' => 0
        );
        
        foreach ($allUserObject as &$singleUser) {
            if ($singleUser->final_score >= 0 && $singleUser->final_score <= 1.9) {
                $arrayScoreRange['0.0 - 1.9'] += 1;
            } else if ($singleUser->final_score >= 2 && $singleUser->final_score <= 3.9) {
                $arrayScoreRange['2.0 - 3.9'] += 1;
            } else if ($singleUser->final_score >= 4 && $singleUser->final_score <= 5.9) {
                $arrayScoreRange['4.0 - 5.9'] += 1;
            } else if ($singleUser->final_score >= 6 && $singleUser->final_score <= 7.9) {
                $arrayScoreRange['6.0 - 7.9'] += 1;
            } else if ($singleUser->final_score >= 8 && $singleUser->final_score <= 8.9) {
                $arrayScoreRange['8.0 - 8.9'] += 1;
            } else if ($singleUser->final_score >= 9 && $singleUser->final_score <= 10) {
                $arrayScoreRange['9.0 - 10.0'] += 1;
            } 
        }

        foreach ($arrayScoreRange as $key => $value) {
            $tempArray['name'] = $key;
            $tempArray['percentage'] = round(($value/$allUserCount)*100, 2);
            $tempArray['count'] = $value;
            $arrayReturn[] = $tempArray;
        }
        
        return ApiResponse::json($arrayReturn);
    }

    

}
