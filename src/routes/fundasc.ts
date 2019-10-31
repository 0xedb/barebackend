import crypto from 'crypto';
import cors from 'cors';
import {Router, Request, Response} from 'express';
import {buildSchema} from 'graphql';
import graphqlHTTP from 'express-graphql';

const router = Router();
router.use(cors());

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

if (process.env.BARE_ENV !== 'production') {
  router.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue,
      graphiql: true,
    })
  );
} else {
  const graphql = graphqlHTTP({
    schema,
    rootValue,
    graphiql: false,
  });

  router.post('/graphql', graphql);
}

export default router;
