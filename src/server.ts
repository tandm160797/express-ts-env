import express from 'express';
import path from 'path';

import 'dotenv/config';

const server = async () => {
	const app = express();
	const port = process.env.PORT;

	app.use(express.static(path.join(path.resolve(), 'public')));

	app.listen(port);
};

void server();
