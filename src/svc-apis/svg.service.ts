import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from './svg.schema';

@Injectable()
export class GameService {
  constructor(@InjectModel(Game.name) private gameModel: Model<GameDocument>) {}

  async create(game: Game): Promise<Game> {
    const createdGame = new this.gameModel(game);
    return createdGame.save();
  }

  async findById(id: string): Promise<Game> {
    return this.gameModel.findById(id).exec();
  }

  async findAll(): Promise<Game[]> {
    this.gameModel.find({}).catch((err) => console.log('err', err));
    return this.gameModel.find();
  }

  async update(id: string, game: Game): Promise<Game> {
    return this.gameModel.findByIdAndUpdate(id, game, { new: true }).exec();
  }

  async delete(id: string): Promise<Game> {
    return this.gameModel.findByIdAndDelete(id).exec();
  }

  async deleteAll(): Promise<any> {
    return this.gameModel.deleteMany({}).exec()
  }
}
