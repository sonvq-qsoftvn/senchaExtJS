<?php

class TeamController extends BaseController {

    public $restful = true;

    public function index() {
        return Team::all();
    }

}
