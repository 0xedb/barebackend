import crypto from 'crypto';
import cors from 'cors';
import {Router, Request, Response} from 'express';
import sendMail from '../utils/mailer';
import {buildSchema} from 'graphql';
import graphqlHTTP from 'express-graphql';

const router = Router();
router.use(cors());

const schema = buildSchema(`
  type Query {
    code(email: String!): String!
  }
`);

const transportOptions = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.FUNDUS_USER as string,
    pass: process.env.FUNDUS_PASS as string,
  },
};

const mailOptions = {
  from: '"FundUs 👻" <fundus.flask@gmail.com>', // sender address
  to: 'edohbruno@gmail.com', // list of receivers
  subject: 'Login Code ✔', // Subject line
  text: '', // plain text body
  html: '', // html body
};

let rootValue = {
  code: ({email}: {email: string}): string => {
    const bytes = crypto.randomBytes(10).toString('hex');
    mailOptions.text = `Login code is: ${bytes}`;
    mailOptions.html = `Login code is: <b><pre>${bytes}</pre></b>`;
    sendMail(transportOptions, mailOptions);
    return bytes;
  },
};

const env = process.env.BARE_ENV !== 'production';
const graphql = graphqlHTTP({
  schema,
  rootValue,
  graphiql: env,
});

if (env) {
  router.use('/graphql', graphql);
} else {
  router.post('/graphql', graphql);
}

export default router;
