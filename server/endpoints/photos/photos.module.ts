import { Module } from 'nest.js';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';

@Module({
    controllers: [PhotosController],
    components: [PhotosService]
})
export class PhotosModule {}