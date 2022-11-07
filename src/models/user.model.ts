import { Pool, ResultSetHeader } from 'mysql2/promise';
import { UserInterface } from '../interface/interfaces';
import connection from './connection';

class UserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async create(user: UserInterface): Promise<UserInterface> {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES(?,?,?,?)',
      [user.username, user.classe, user.level, user.password],
    );
    return { id: insertId, ...user };
  }
}

export default UserModel;