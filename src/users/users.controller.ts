import {
  Controller,
  Delete,
  Param,
  Patch,
  Body,
  Post,
  Get,
  Query,
} from '@nestjs/common';

import { Role, User } from 'src/types/user';

@Controller('users')
export class UsersController {
  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: Role) {
    console.log(`Filtering by ${role}`);
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Looking for user with id = ${id}`;
  }

  @Post()
  create(@Body() user: User) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: Partial<User>) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return { id };
  }
}
