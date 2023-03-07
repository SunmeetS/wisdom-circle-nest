import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Game } from './svg.schema';
import { GameService } from './svg.service';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('create')
  async create(@Body() game: Game): Promise<Game> {
    return this.gameService.create(game);
  }

  @Get('find/all')
  async findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Game> {
    return this.gameService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() game: Game): Promise<Game> {
    return this.gameService.update(id, game);
  }

  @Delete('deleteAll')
  async deleteAll() {
    return this.gameService.deleteAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Game> {
    return this.gameService.delete(id);
  }
}
