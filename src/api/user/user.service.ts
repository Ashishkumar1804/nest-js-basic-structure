import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSchema } from 'src/models/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInerface } from '../../interface/user';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private UserModel: Model<UserInerface>,
  ) { }
  create(data: any) {
    console.log(data,'data>>>');

    let user = new this.UserModel(data).save()
    return { status: true, statusCode: HttpStatus.OK, msg: 'User created successfully', data: user };
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
