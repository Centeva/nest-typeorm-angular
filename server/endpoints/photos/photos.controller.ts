import { Controller, Get, Post, HttpStatus, Response, Param, Body } from 'nest.js';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
    constructor(private photoService: PhotosService) {}

    @Get('/all')
    async getAllPhotos(@Response() res) {
        // let photos = await this.photoService.getAllPhotos();
        res.status(HttpStatus.OK).json(null);
    }
}