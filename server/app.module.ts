import { Module } from 'nest.js';
import { UsersModule, PhotosModule } from './endpoints';

@Module({
    modules: [
        UsersModule,
        PhotosModule,
    ]
})
export class ApplicationModule {}