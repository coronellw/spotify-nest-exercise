import { Injectable, NotFoundException } from '@nestjs/common';
import { Role, User } from 'src/types/user';
import { users as mockUsers } from './users.data';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = mockUsers;

  findAll(role?: Role) {
    if (role) {
      const filteredUsers = this.users.filter((user) => user.role === role);

      if (filteredUsers.length === 0) {
        throw new NotFoundException('User Role not found');
      }

      return filteredUsers;
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id) || [
      { id: 0, name: '', email: '', role: 'INTERN' },
    ];

    const newUser: CreateUserDto & { id: number } = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };

    this.users.push(newUser);
    return { ...newUser, isNew: true };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });

    return this.findOne(id);
  }

  deleteOne(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
