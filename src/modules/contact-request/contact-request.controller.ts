import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ContactRequestService } from './services/contact-request.service';
import { CreateContactRequestDto } from './dto/create-contact-request.dto';
import { ContactRequestResponseDto } from './dto/contact-request-response.dto';
import { TransformPlainToInstance } from 'class-transformer';

@Controller('contact-request')
export class ContactRequestController {
  constructor(private readonly contactRequestService: ContactRequestService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @TransformPlainToInstance(ContactRequestResponseDto)
  create(
    @Body() createContactRequestDto: CreateContactRequestDto,
  ): ContactRequestResponseDto {
    return this.contactRequestService.create(createContactRequestDto);
  }
}
