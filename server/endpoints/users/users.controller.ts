import { Controller, Get, Post, HttpStatus, Response, Param, Body} from 'nest.js';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async getAllUsers(@Response() res) {
        let users = await this.usersService.getAllUsers();
        res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    async getUser(@Response() res, @Param('id') id) {
        let user = await this.usersService.getUser(id);
        res.status(HttpStatus.OK).json(user);
    }

    @Post()
    async addUser(@Response() res, @Body('user') user) {
        let msg = await this.usersService.addUser(user);
        res.status(HttpStatus.CREATED).json(msg);
    }
}