import { Module } from '@nestjs/common';
import { ChatbotModule } from './modules/chatbot/chatbot.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ChatbotModule
  ]
})
export class AppModule {}
