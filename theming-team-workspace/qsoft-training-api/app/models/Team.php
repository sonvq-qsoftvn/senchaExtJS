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
    public $timestamps = true;

    public function user() {
        return $this->belongsTo('User');
    }

}
