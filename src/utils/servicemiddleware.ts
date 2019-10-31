import schemas from './schemas';
import resolvers from './resolvers';
import {buildSchema} from 'graphql';
import {ServiceRequest} from './types';
import {Response, NextFunction} from 'express';

export default (req: ServiceRequest, res: Response, next: NextFunction) => {
  // get the service
  const service: string = req.path.split('/')[1]; 

  req.schema = schemas.get(service);
  req.resolver = resolvers.get(service); 

  next();
};
