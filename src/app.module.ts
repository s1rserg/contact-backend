import { Module } from '@nestjs/common';
import { ContactRequestModule } from './modules/contact-request/contact-request.module';

@Module({
  imports: [ContactRequestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
