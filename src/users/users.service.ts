import { Inject, Injectable, Logger } from '@nestjs/common';
import { CollectionReference } from 'firebase-admin/firestore';
import { UsersDocument } from './documents/users.document';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private logger: Logger = new Logger(UsersService.name);

  constructor(
    @Inject(UsersDocument.collectionName)
    private readonly usersCollection: CollectionReference<UsersDocument>,
  ) {}

  async create(createUserInput: User): Promise<UsersDocument[]> {
    this.logger.log(`Creating user: ${createUserInput.username}`);
    const docRef = this.usersCollection.doc(createUserInput.id.toString());
    await docRef.set(createUserInput);
    return this.findAll();
  }

  async findAll(): Promise<UsersDocument[]> {
    this.logger.log('Getting users');
    const snapshot = await this.usersCollection.get();
    const users: UsersDocument[] = [];
    snapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  }

  async findOne(id: string) {
    this.logger.log(`Getting user with ID: ${id}`);
    const docRef = this.usersCollection.doc(id.toString());
    const userDoc = await docRef.get();
    const user = userDoc.data();
    return user;
  }

  async update(
    id: string,
    updateUserInput: UpdateUserInput,
  ): Promise<UsersDocument[]> {
    this.logger.log(`Updating user with ID: ${id}`);
    const docRef = this.usersCollection.doc(id.toString());
    await docRef.update(updateUserInput);
    return this.findAll();
  }

  async remove(id: string) {
    const docRef = this.usersCollection.doc(id.toString());
    const doc = await docRef.get();
    if (!doc.exists) {
      this.logger.warn(`User with ID: ${id} not found, skiping remove user`);
    } else {
      this.logger.log(`Deleting user with ID: ${id}`);
      await docRef.delete();
    }
    return this.findAll();
  }
}
