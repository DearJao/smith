import jwt from 'jsonwebtoken';
import { UserInterface } from '../interface/interfaces';

export default class Token {
  static generator(user: UserInterface): string {
    const secret = process.env.JWT_SECRET || 'secret';
    const token = jwt.sign({ user }, secret, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return token;
  }
}