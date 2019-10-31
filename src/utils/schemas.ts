const schemas: Map<string, string> = new Map();

schemas.set(
  'fundasc',
  `type Query {
    code(email: String!): String!
  }`
);

export default schemas;
