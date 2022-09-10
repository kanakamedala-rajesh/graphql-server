import { User } from '../entities/user.entity';

export class UsersDocument extends User {
  static collectionName = 'users';
}
