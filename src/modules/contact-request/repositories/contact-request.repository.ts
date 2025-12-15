import { CreateContactRequestDto } from '../dto/create-contact-request.dto';
import { ContactRequest } from '../types';

export abstract class ContactRequestRepository {
  abstract create(request: CreateContactRequestDto): ContactRequest;
}
