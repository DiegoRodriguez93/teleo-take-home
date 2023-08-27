import { gql } from "@apollo/client";

const typeDefs = gql`
  type Screenshot {
    id: ID!
    kid_id: ID!
    data: String!
    thumbnail: String!
    created_at: String!
  }

  type Query {
    getScreenshotsByKid(kid_id: ID!): [Screenshot!]!
  }

  type Mutation {
    addScreenshot(kid_id: ID!, data: String!): Screenshot!
  }
`;

export default typeDefs;
