import { Injectable, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WisdomController } from './wisdom.controller';
import { User, UserSchema } from './wisdom.user.schema';
import { WisdomService } from './wisdom.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [WisdomController],
  exports: [WisdomService],
  providers: [WisdomService],
})
export class WisdomModule {}
