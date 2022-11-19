import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { WisdomService } from './wisdom.service';

@Controller()
export class WisdomController {
  constructor(private readonly wisdomService: WisdomService) { }

  @Get(':emailId')
  getUser(@Param() email: any) {
    return this.wisdomService.getUsers(email.emailId);
  }

  @Post('addUser')
  addUser(@Body() userData: any) {
    return this.wisdomService.addUser(userData);
  }

  @Post('updatePassword')
  updatePassword(@Body() userDetails: any) {
    return this.wisdomService.updatePassword(userDetails);
  }
}
