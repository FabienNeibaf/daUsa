
import { Injectable } from '@nestjs/common';
import { UsersService, User } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && bcrypt.compare(password, user.password)) {
      const { pass, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User): Promise<any> {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
