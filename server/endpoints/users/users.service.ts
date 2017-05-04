import { Component, HttpException } from 'nest.js';

@Component()
export class UsersService {
    private users = [
        { id: 1, name: "Michael Scott" },
        { id: 2, name: "Dwight K. Schrute" },
        { id: 3, name: "Pam Halpert" }
    ]

    public getAllUsers() {
        return Promise.resolve(this.users);
    }

    public getUser(id: number) {
        let user = this.users.find(u => u.id === id);
        if (!user) {
            throw new HttpException("User not found", 404);
        }
        return Promise.resolve(user);
    }

    public addUser(user) {
        this.users.push(user);
        return Promise.resolve();
    }
}