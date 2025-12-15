import { Injectable } from '@nestjs/common';
import { ContactRequestRepository } from '../repositories/contact-request.repository';
import { CreateContactRequestDto } from '../dto/create-contact-request.dto';

@Injectable()
export class ContactRequestService {
  constructor(private readonly repository: ContactRequestRepository) {}

  create(createUserDto: CreateContactRequestDto) {
    return this.repository.create(createUserDto);
  }
}
