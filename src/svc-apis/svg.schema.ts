import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  publishedDate: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
