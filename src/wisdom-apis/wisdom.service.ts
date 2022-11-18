import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { User, UserDocument, UserSchema } from './wisdom.user.schema';

@Injectable()
export class WisdomService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  getUsers = (email) => {
    return this.userModel.findOne({
      email: email,
    });
  };

  async addUser(userDetails: any): Promise<any> {
    const addedUser = new this.userModel(userDetails);
    return addedUser.save();
  }
}
