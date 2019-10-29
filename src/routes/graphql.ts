import {buildSchema} from 'graphql';
import graphqlHTTP from 'express-graphql';
import {Router} from 'express';
import crypto from 'crypto';

const schema = buildSchema(`
  type Query {
    myEmail(email: String!): String!
  }
`);

var rootValue = {
  myEmail: ({email}: {email: string}): string => {
    return crypto.randomBytes(10).toString('hex');
  },
};

const router = Router();

router.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);
export default router;
