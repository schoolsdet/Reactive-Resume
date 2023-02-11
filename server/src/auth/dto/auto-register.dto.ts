import {IsNotEmpty, IsObject} from 'class-validator';

export class AutoRegisterDto {

  @IsObject()
  @IsNotEmpty()
  data: object
}
