
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { User } from './users/users.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req): Promise<User> {
    return req.user;
  }
}
