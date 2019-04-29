import { Router } from 'express';
import User_Controller from '../controllers/User_Controller';

class User_Routes extends User_Controller {
	private router: Router;

	constructor() {
		super();
		this.router = Router();
		this.routes();
	}

	private routes(): void {
		// this.router.get('/all', this.getAllEvents);
		// this.router.post('/create', this.createEvent);
	}

	public getRouter() {
		return this.router;
	}
}

const user_Routes = new User_Routes();
export default user_Routes.getRouter();