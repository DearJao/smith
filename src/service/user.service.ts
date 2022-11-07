import { UserInterface } from '../interface/interfaces';
// import connection from '../models/connection';
import UserModel from '../models/user.model';
import Token from '../middleware/tokenGenerator';

class AddUser {
  public model = new UserModel();

  public async create(user: UserInterface): Promise<string> {
    const users = await this.model.create(user);
    const token = Token.generator(users);
    return token;
  }
}

export default AddUser;