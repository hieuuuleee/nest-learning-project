import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  private users: User[] = [];

  async findAll() {
    return this.users;
  }

  async findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  async findOneByUsername(username: string){
    return this.users.find(user => user.username === username)
  }

  async create(createUserDto: CreateUserDto) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);

    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
      password: hashedPassword, // Store the hashed password
    };

    this.users.push(newUser);
    return { ...newUser, password: undefined }; // Exclude password from response
  }

  async update(id: number, updateUserDto: CreateUserDto) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return null;
    this.users[userIndex] = { id, ...updateUserDto};
    return this.users[userIndex];
  }

  async remove(id: number) {
    this.users = this.users.filter( user => user.id !== id);
    return { message: `User ${id} deleted` };
  }
}
