import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
     getPerson() {
    const person = {
      id: 1,
      name: 'José Arturo García Rodríguez',
      age: 25,
    };
 
    return person;
  }
}
