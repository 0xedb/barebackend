import {Request} from 'express';

interface ServiceRequest extends Request {
  schema?: string;
  resolver?: Object;
}

export {ServiceRequest};
