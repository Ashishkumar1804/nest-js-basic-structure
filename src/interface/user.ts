import { Document, ObjectId } from 'mongoose';

export interface UserInerface extends Document {
  name: string;
  email: string;
  password: string;  
  createdAt?: Date;
  updatedAt?: Date;
}