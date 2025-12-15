import { Injectable } from '@nestjs/common';
import { CreateContactRequestDto } from '../dto/create-contact-request.dto';
import { toContactRequestMapper } from '../mappers/to-contact-request-mapper';
import { ContactRequest } from '../types';
import { ContactRequestRepository } from './contact-request.repository';

@Injectable()
export class InMemoryContactRequestRepository implements ContactRequestRepository {
  private readonly requests: ContactRequest[] = [];
  private nextId = 1;

  create(data: CreateContactRequestDto): ContactRequest {
    const newRequest = {
      id: this.nextId++,
      ...data,
      createdAt: new Date().toISOString(),
    };

    this.requests.push(newRequest);

    return toContactRequestMapper(newRequest);
  }
}
