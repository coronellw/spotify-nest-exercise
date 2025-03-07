import { Injectable } from '@nestjs/common';
import { Role, User } from 'src/types/user';
import { users as mockUsers } from './users.data';

@Injectable()
export class UsersService {
  private users: User[] = mockUsers;

  findAll(role?: Role) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  create(user: Omit<User, 'id'>) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id) || [
      { id: 0, name: '', email: '', role: 'INTERN' },
    ];

    const newUser: User = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };

    this.users.push(newUser);
    return { ...newUser, isNew: true };
  }

  update(id: number, userUpdate: Partial<User>) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
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
