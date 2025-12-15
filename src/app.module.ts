import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactRequestModule } from './modules/contact-request/contact-request.module';

@Module({
  imports: [ContactRequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
