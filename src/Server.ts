import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
if(process.env.NODE_ENV !== "production") require('dotenv').config()


//* Importing Routes

class Server {
	private app: express.Application;
	private PORT: any;

	constructor() {
		this.PORT = process.env.PORT;
		this.app = express();
		this.config();
		this.routes();
	}

	private config(): void {
		//* Middlewares
		this.app.use(morgan('dev'));
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(express.json());
		this.app.use(cors());
	}

	private routes(): void {
		this.app.get('/', (req, res) => res.status(200).json({msg: "Welcome to my api :)"}));
	}

	public start(): void {
    this.app.listen(this.PORT, () => console.log('Server started on port ' + this.PORT));
	}
}

const server = new Server();
server.start();