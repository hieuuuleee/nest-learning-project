import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  private users: User[] = [];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: CreateUserDto) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return null;
    this.users[userIndex] = { id, ...updateUserDto};
    return this.users[userIndex];
  }

  remove(id: number) {
    this.users = this.users.filter( user => user.id !== id);
    return { message: `User ${id} deleted` };
  }
}
