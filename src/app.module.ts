import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WisdomModule } from './wisdom-apis/wisdom.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GameModule } from './svc-apis/svg.module';

@Module({
  imports: [
    WisdomModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://sunmeet:sunmeet@cluster0.zqxxfuf.mongodb.net/?retryWrites=true&w=majority',
      }),
    }),
    GameModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
