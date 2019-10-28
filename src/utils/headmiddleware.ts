import {Request, Response, NextFunction} from 'express';

export default (req: Request, res: Response, next: NextFunction): void => {
  res.set({
    'Content-Security-Policy': 'default-src https frame-ancestors none',
    'Strict-Transport-Security':
      ' max-age=63072000; includeSubDomains; preload',
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
  });
  next();
};
