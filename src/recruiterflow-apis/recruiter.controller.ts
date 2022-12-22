import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RecruiterDocument } from './recruiter.schema';
import { RecruiterService } from './recruiter.service';

@Controller()
export class RecruiterController {
  constructor(private readonly recruiterService: RecruiterService) {}

  @Get('get-recruiter-flow-data')
  sendData() {
    return this.recruiterService.sendData();
  }

  @Post('post-recruiter-flow-data')
  addData(@Body() data: RecruiterDocument) {
    return this.recruiterService.addData(data);
  }
}
