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
        
        $userAdmin = User::create(
            array(
                'email'                 => 'tuanta@qsoft.com.vn',
                'name'                  => 'Tran Anh Tuan',
                'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
                'phone_number'          => '0981234567',
                'role'                  => 'admin'
            )
        );
        
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
        
        DB::table('topics')->delete();
        
        $topic1 = Topic::create(
            array(
                'name'                  => 'Core Concepts'
            )
        );
        
        $topic2 = Topic::create(
            array(
                'name'                  => 'Components',
                'team_id'               => $team1->getKey()
            )
        );
        
        $topic3 = Topic::create(
            array(
                'name'                  => 'Application Architecture',
                'team_id'               => $team2->getKey()
            )
        );
        
        $topic4 = Topic::create(
            array(
                'name'                  => 'Sencha Cmd'
            )
        );
        
        $topic5 = Topic::create(
            array(
                'name'                  => 'Ext JS Themes'
            )
        );
        
        $topic6 = Topic::create(
            array(
                'name'                  => 'Tools and Debugging'
            )
        );
        
        $this->command->info('Topic table seeded!');
    }

}
