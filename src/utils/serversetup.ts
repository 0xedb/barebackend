import dotenv from 'dotenv';

if (!(process.env.BARE_ENV === 'production')) {
  dotenv.config();
}
const PORT = parseInt(process.env.BARE_PORT as string) || 9090;

export {PORT};
