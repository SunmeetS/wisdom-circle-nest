import { ConfigurableModuleBuilder, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WisdomModule } from './wisdom-apis/wisdom.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RecruiterModule } from './recruiterflow-apis/recruiter.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    WisdomModule,
    RecruiterModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://sunmeet:sunmeet@cluster0.zqxxfuf.mongodb.net/?retryWrites=true&w=majority',
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
