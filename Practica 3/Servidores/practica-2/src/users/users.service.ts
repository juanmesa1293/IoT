import { Injectable } from '@nestjs/common';

export type User = {
    userId: number,
    username: string,
    password: string
 };

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
           userId: 1,
           username: 'killey',
           password: 'juancarlos1293',
        },
        {
           userId: 2,
           username: 'juanmesa1293',
           password: 'juancarlos1293',
        },
     ];

     /**
      * Recupera los datos del usuario
      * @param username Nombre de usuario
      * @returns 
      */
    async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
 }
}
