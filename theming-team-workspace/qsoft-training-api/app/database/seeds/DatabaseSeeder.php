<?php
class DatabaseSeeder extends Seeder {

    public function run()
    {
        DB::table('teams')->delete();
        
        $team1 = Team::create(
            array(
                'name'                 => 'Team 1',
                'slogan'               => 'Workable Product!'
            )
        );
        
        $team2 = Team::create(
            array(
                'name'                 => 'Team 2',
                'slogan'               => 'Incredible Team!'
            )
        );
        
        $team3 = Team::create(
            array(
                'name'                 => 'Team 3',
                'slogan'               => 'Your strategic software partner'
            )
        );
        
        $team4 = Team::create(
            array(
                'name'                 => 'Team 4',
                'slogan'               => 'Whoohoo, Banana Team!'
            )
        );
        
        $team5 = Team::create(
            array(
                'name'                 => 'Team 5',
                'slogan'               => 'We are the Champions'
            )
        );
        
        $team4 = Team::create(
            array(
                'name'                 => 'Team 6',
                'slogan'               => 'Teamwork makes DREAM work'
            )
        );
        
        $this->command->info('Team table seeded!');
        
        
        DB::table('users')->delete();
        
        $user1 = User::create(
            array(
                'email'                 => 'sonvq@qsoft.com.vn',
                'name'                  => 'Vu Quang Son',
                'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
                'phone_number'          => '0982413281',
                'team_id'              => $team1->getKey()
            )
        );
        
        $user2 = User::create(
            array(
                'email'                 => 'cuongtc@qsoft.com.vn',
                'name'                  => 'Tran Cao Cuong',
                'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
                'phone_number'          => '0969696969',
                'team_id'              => $team2->getKey()
            )
        );
        
        $user3 = User::create(
            array(
                'email'                 => 'thangvx@qsoft.com.vn',
                'name'                  => 'Vu Xuan Thang',
                'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
                'phone_number'          => '0912456142'
            )
        );
        
        $user4 = User::create(
            array(
                'email'                 => 'bachnx@qsoft.com.vn',
                'name'                  => 'Nguyen Xuan Bach',
                'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
                'phone_number'          => '0985621236'
            )
        );
        
        $this->command->info('User table seeded!');
    }

}
