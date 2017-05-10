import { Component, HttpException } from 'nest.js';
import { getEntityManager, Repository } from 'typeorm';
// import { Photo } from '../../models/Photo';

@Component()
export class PhotosService {
    // private repo: Repository<Photo>;

    // constructor() {
    //     // database connection
    //     this.repo = getEntityManager().getRepository(Photo);
    // }

    // public async getAllPhotos() {
    //     return await this.repo.find();
    // }
}