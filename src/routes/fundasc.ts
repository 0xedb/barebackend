import crypto from 'crypto';
import cors from 'cors';
import {Router} from 'express';
import sendMail, {TransporterOptions, MailerOptions} from '../utils/mailer';
import {buildSchema} from 'graphql';
import graphqlHTTP from 'express-graphql';

const router = Router();
router.use(cors());

const schema = buildSchema(`
  type Query {
    code(email: String!): String!
    login(email: String!): Boolean! 
  }
 
`);

let rootValue = {
  code: async ({email}: {email: string}) => {
    const bytes = crypto.randomBytes(10).toString('hex');
    const transportOptions: TransporterOptions = {
      host: process.env.FUN_HOST as string,
      port: parseInt(process.env.FUN_PORT as string),
      secure: true,
      auth: {
        user: process.env.FUN_USER as string,
        pass: process.env.FUN_PASS as string,
      },
    };

    const mailOptions: MailerOptions = {
      from: `"FundUs 👻" <${process.env.FUN_USER}>`,
      to: `${email}`,
      subject: 'Login Code ✔',
      text: `Login code is: ${bytes}`,
      html: `Login code is: <b><pre>${bytes}</pre></b>`,
    };

    const response = await sendMail(transportOptions, mailOptions);
    if (response) {
      return bytes;
    } else {
      return 'BAREBACKEND_ERROR';
    }
  },

  login: (email: String): boolean => {
    return false;
  },
  ip: () => console.log(router),
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
