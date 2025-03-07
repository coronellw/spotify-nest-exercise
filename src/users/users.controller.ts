import {
  Controller,
  Delete,
  Param,
  Query,
  Patch,
  Body,
  Post,
  Get,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { Role, User } from 'src/types/user';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: Role) {
    return this.usersService.findAll(role);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() // POST /users
  create(@Body() user: Omit<User, 'id'>) {
    return this.usersService.create(user);
  }

  @Patch(':id') //PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: Partial<User>) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id') // DELETE /users/:id
  deleteOne(@Param('id') id: string) {
    return this.usersService.deleteOne(+id);
  }
}
