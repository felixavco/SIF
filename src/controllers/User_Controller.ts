import { Request, Response } from 'express';
import User_Validation from '../validators/User_Validation';

class User_Controller extends User_Validation  {
	constructor() {
		super();
	}


	public async Register(req: Request, res: Response): Promise<any> {
		res.send('These are all the events available');
  }
  
  public async Login(req: Request, res: Response): Promise<any> {
		res.send('These are all the events available');
	}


}

export default User_Controller;