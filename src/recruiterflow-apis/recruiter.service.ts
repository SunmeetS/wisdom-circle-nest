import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Recruiter, RecruiterDocument } from './recruiter.schema';

@Injectable()
export class RecruiterService {
  constructor(
    @InjectModel(Recruiter.name)
    private recruiterModel: Model<RecruiterDocument>,
    @InjectConnection() private connection: Connection,
  ) {}
  '';
  async sendData() {
    return this.recruiterModel.find().exec();
  }

  async addData() {
    return this.recruiterModel.insertMany({ data: 'New Card' });
  }

  async deleteData(id) {
    console.log(
      (await this.recruiterModel.deleteOne({ _id: id })).deletedCount,
    );
  }
}
