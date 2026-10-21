import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'José Arturo García Rodríguez',
      age: 25,
    },
    {
      id: 2,
      name: 'Juan Pérez',
      age: 30,
    },
  ];

  getAllUsers() {
    return this.users;
  }
} 