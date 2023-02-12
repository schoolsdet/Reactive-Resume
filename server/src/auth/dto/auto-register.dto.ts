import {IsNotEmpty} from 'class-validator';

export class AutoRegisterDto {

  @IsNotEmpty()
  data: {
    user: {
      email: string,
      username: string
    }
  }
}
