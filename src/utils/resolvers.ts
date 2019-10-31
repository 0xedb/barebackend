import crypto from 'crypto';

const resolvers: Map<string, Object> = new Map();

resolvers.set('fundasc', {
  code: ({email}: {email: string}): string => {
    return crypto.randomBytes(10).toString('hex');
  },
});

export default resolvers;
