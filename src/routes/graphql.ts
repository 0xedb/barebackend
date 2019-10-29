import {buildSchema} from 'graphql';
import graphqlHTTP from 'express-graphql';
import {Router} from 'express';
import crypto from 'crypto';

const schema = buildSchema(`
  type Query {
    code(email: String!): String!
  }
`);

let rootValue = {
  code: ({email}: {email: string}): string => {
    return crypto.randomBytes(10).toString('hex');
  },
};

const router = Router();
router.post(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: false,
  })
);
 

export default router;