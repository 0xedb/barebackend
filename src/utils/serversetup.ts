import dotenv from 'dotenv';

dotenv.config();
const PORT = parseInt(process.env.BARE_PORT as string) || 9090;


export {PORT}