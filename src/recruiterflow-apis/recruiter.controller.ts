import { Body, Controller, Get, Post } from '@nestjs/common';
import { RecruiterDocument } from './recruiter.schema';
import { RecruiterService } from './recruiter.service';

@Controller()
export class RecruiterController {
  constructor(private readonly recruiterService: RecruiterService) {}

  @Get('recruiter/get-recruiter-flow-data')
  sendData() {
    return this.recruiterService.sendData();
  }

  @Post('recruiter/post-recruiter-flow-data')
  addData(@Body() data: RecruiterDocument) {
    return this.recruiterService.addData(data);
  }
}
