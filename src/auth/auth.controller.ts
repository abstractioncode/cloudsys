import { Controller,Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService){}
  @UseGuards(AuthGuard('local'))
  @Get('auth/login')
  async login(@Request() req) {
    return await this.authService.validateUser(req.user.username, req.user.password);
  }
  @UseGuards(AuthGuard('local'))
  @Get('Register')
  async Register (@Request() req) {
    return await this.authService.Register(req.user.username, req.user.password);
  }
}