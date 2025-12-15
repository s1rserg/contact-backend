import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateContactRequestDto {
  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name must be at least 2 characters long' })
  name: string;

  @IsEmail({}, { message: 'Email is not valid' })
  email: string;

  @IsString({ message: 'Message must be a string' })
  @MinLength(10, { message: 'Message must be at least 10 characters long' })
  message: string;
}
