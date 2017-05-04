import { Module } from 'nest.js';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    controllers: [ UsersController ],
    components: [ UsersService ],
    // exports: [ UsersService ]
})
export class UsersModule {}