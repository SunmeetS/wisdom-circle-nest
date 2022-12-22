import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecruiterDocument = HydratedDocument<Recruiter>;

@Schema({ collection: 'users' })
export class Recruiter {
  @Prop()
  id: number;

  @Prop()
  data: string;
}

export const RecruiterSchema = SchemaFactory.createForClass(Recruiter);
