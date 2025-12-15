import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ContactRequestService } from './services/contact-request.service';
import { CreateContactRequestDto } from './dto/create-contact-request.dto';
import { ContactRequestResponseDto } from './dto/contact-request-response.dto';

@Controller('contact-request')
export class ContactRequestController {
  constructor(private readonly contactRequestService: ContactRequestService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() createContactRequestDto: CreateContactRequestDto,
  ): ContactRequestResponseDto {
    return this.contactRequestService.create(createContactRequestDto);
  }
}
