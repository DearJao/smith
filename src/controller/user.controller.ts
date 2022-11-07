import { Request, Response } from 'express';
import UserService from '../service/user.service';

class AddProduct {
  public UserService = new UserService();

  public addUser = async (req: Request, res: Response) => {
    const users = await this.UserService.create(req.body);
    return res.status(201).json({ token: users });
  };
}

export default AddProduct;