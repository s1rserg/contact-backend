import { Module } from '@nestjs/common';
import { ContactRequestController } from './contact-request.controller';
import { ContactRequestService } from './services/contact-request.service';
import { ContactRequestRepository } from './repositories/contact-request.repository';
import { InMemoryContactRequestRepository } from './repositories/in-memory-contact-request.repository';

@Module({
  imports: [],
  controllers: [ContactRequestController],
  providers: [
    ContactRequestService,
    {
      provide: ContactRequestRepository,
      useClass: InMemoryContactRequestRepository,
    },
  ],
  exports: [],
})
export class ContactRequestModule {}
