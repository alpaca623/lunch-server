 import './db';
 import app from './server';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log('✅ open lunch server!!'))