import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ContactRequestResponseDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  name: string;

  @Expose()
  message: string;

  @Expose()
  createdAt: string;
}
