<?php

class Team extends SmartLoquent {

    /**
     * The database collection used by the model.
     *
     * @var string
     */
    protected $collection = 'teams';
    protected $hidden = array('deleted_at', 'created_at', 'updated_at');
    protected $guarded = array('key');
    protected $with = array('children');
    public $timestamps = true;
    

    public function children() {
        return $this->hasMany('User', 'team_id', '_id');
    }

}
