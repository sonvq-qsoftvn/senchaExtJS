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
        
        $team6 = Team::create(
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
                'final_score'           => 9.75,
                'team_id'               => $team1->getKey()
            )
        );
        
        $user2 = User::create(
            array(
                'email'                 => 'cuongtc@qsoft.com.vn',
                'name'                  => 'Tran Cao Cuong',
                'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
                'phone_number'          => '0969696969',
                'final_score'           => 9.25,
                'team_id'               => $team2->getKey()
            )
        );
        
        $user3 = User::create(
            array(
                'email'                 => 'thangvx@qsoft.com.vn',
                'name'                  => 'Vu Xuan Thang',
                'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
                'phone_number'          => '0912456142',
                'final_score'           => 9.50,
                'team_id'               => $team3->getKey()
            )
        );
        
        $user4 = User::create(
            array(
                'email'                 => 'bachnx@qsoft.com.vn',
                'name'                  => 'Nguyen Xuan Bach',
                'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
                'phone_number'          => '0985621236',
                'final_score'           => 9.00,
                'team_id'               => $team4->getKey()
            )
        );
        
       $user5 = User::create(
           array(
               'email'                 => 'taipm@qsoft.com.vn',
               'name'                  => 'Pham Minh Tai',
               'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
               'phone_number'          => '0984328656',
               'final_score'           => 8.50,
               'team_id'               => $team5->getKey()
           )
       );
       
       $user6 = User::create(
           array(
               'email'                 => 'thainq@qsoft.com.vn',
               'name'                  => 'Ngo Quoc Thai',
               'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
               'phone_number'          => '0984134847',
               'final_score'           => 8.00,
               'team_id'               => $team6->getKey()
           )
       );
       
       $user7 = User::create(
           array(
               'email'                 => 'sinhpn@qsoft.com.vn',
               'name'                  => 'Pham Ngoc Sinh',
               'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
               'phone_number'          => '0912460337',
               'final_score'           => 7.75,
               'team_id'               => $team1->getKey()
           )
       );
       
       $user8 = User::create(
           array(
               'email'                 => 'lamnv@qsoft.com.vn',
               'name'                  => 'Nguyen Van Lam',
               'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
               'phone_number'          => '0918644264',
               'final_score'           => 5.25,
               'team_id'               => $team2->getKey()
           )
       );
       
       $user9 = User::create(
           array(
               'email'                 => 'vietnh@qsoft.com.vn',
               'name'                  => 'Nguyen Hong Viet',
               'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
               'phone_number'          => '0918644264',
               'final_score'           => 3.00,
               'team_id'               => $team3->getKey()
           )
       );
       
       $user10 = User::create(
           array(
               'email'                 => 'anhnv@qsoft.com.vn',
               'name'                  => 'Nguyen Viet Anh',
               'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
               'phone_number'          => '0918644264',
               'final_score'           => 1.50,
               'team_id'               => $team4->getKey()
           )
       );
       
       $user11 = User::create(
           array(
               'email'                 => 'ducnt@qsoft.com.vn',
               'name'                  => 'Nguyen Thanh Duc',
               'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
               'phone_number'          => '0918644264',
               'final_score'           => 0.50,
               'team_id'               => $team5->getKey()
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
        
//        $topic7 = Topic::create(
//            array(
//                'name'                  => 'Topic 7'
//            )
//        );
//        
//        $topic8 = Topic::create(
//            array(
//                'name'                  => 'Topic 8'
//            )
//        );
//        
//        $topic9 = Topic::create(
//            array(
//                'name'                  => 'Topic 9'
//            )
//        );
        
        $this->command->info('Topic table seeded!');
    }

}
