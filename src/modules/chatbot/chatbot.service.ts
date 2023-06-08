import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Chatbot, IChatbot } from './chatbot';
import * as MarkDown from 'markdown-it';

@Injectable()
export class ChatbotService {
  private chatBot: IChatbot;
  private markdown: any
  constructor(private readonly configService: ConfigService) {
    this.markdown = new MarkDown();
    this.chatBot = new Chatbot(this.configService.get('SESSION_ID'));
  }

  async ask(message: string): Promise<string> {
    try{
      const response = await this.chatBot.ask(message);
      return this.markdown.render(response);
    }catch(e){
      console.log(e);
      return 'Something went wrong.';
    }
  }
}
