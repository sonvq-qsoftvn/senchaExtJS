<?php

class Topic extends SmartLoquent {

    /**
     * The database collection used by the model.
     *
     * @var string
     */
    protected $collection = 'topics';
    protected $hidden = array('deleted_at', 'created_at', 'updated_at');
    protected $guarded = array('key');
    protected $with = array('children');
    public $timestamps = true;
    
    public function children() {
        return $this->hasOne('Team', '_id', 'team_id');
    }
    
    protected static $createRules = array(
        "name"				=>	"required|unique:topics",
        "team_id"			=>	"unique:topics"
    );
        
    public static function getCreateRules() {		
        return self::$createRules;         
    }
    
    public static function getUpdateRules($id) {	
        return array(
            "name"			=>	"required|unique:topics,name,$id,_id",
            "team_id"			=>	"unique:topics,team_id,$id,_id"
        );     
    }
    

}
