import { Module } from 'nest.js';
import { UsersModule } from './endpoints';

@Module({
    modules: [
        UsersModule,
    ]
})
export class ApplicationModule {}