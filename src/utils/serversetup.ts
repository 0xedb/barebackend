import dotenv from 'dotenv';

if (process.env.BARE_ENV !== 'production') {
  dotenv.config();
}

const PORT: number = parseInt(process.env.PORT as string) || 9090; 

export {PORT};
