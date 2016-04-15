<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
        {
            $table->increments('_id');
            $table->string('email');
            $table->string('name');
            $table->string('password');
            $table->string('role')->default('user');
            $table->string('facebook_id')->nullable();
            $table->string('phone_number')->nullable();      
            $table->double('final_score', 4, 2)->default(0.00);      
            $table->integer('team_id')->unsigned()->index()->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('users');
	}

}
