<?php
class DatabaseSeeder extends Seeder {

    public function run()
    {
        DB::table('teams')->delete();
        
        $team1 = Team::create(
            array(
                'name'                 => 'Team 1'
            )
        );
        
        $team2 = Team::create(
            array(
                'name'                 => 'Team 2'
            )
        );
        
        $team3 = Team::create(
            array(
                'name'                 => 'Team 3'
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
                'email'                 => 'taipm@qsoft.com.vn',
                'name'                  => 'Pham Minh Tai',
                'password'              => '$2y$10$05PFShgW1pPx6w/jOYO25ucpGiYQ4Qxhu3e1qmg11c3Jo3mHR0cZ.',
                'phone_number'          => '0912345678'
            )
        );
        
        $this->command->info('User table seeded!');
    }

}
