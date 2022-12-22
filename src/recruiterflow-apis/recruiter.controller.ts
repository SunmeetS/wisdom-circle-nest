import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
  addData() {
    return this.recruiterService.addData();
  }

  @Delete('recruiter/delete-recruiter-flow-data/:id')
  deleteData(@Param('id') id: string) {
    console.log(id)
    return this.recruiterService.deleteData(id);
  }
}
