import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatbotService } from './chatbot.service';
import { AskDto } from './dto/ask.dto';

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly service: ChatbotService) {}

  @Post()
  ask(
    @Body() data: AskDto
  ) {
    return this.service.ask(data.message);
  }
}
