import { apolloServer } from "nextjs-apollo-server";
import { type PageConfig } from "next";
import typeDefs from "./graphql/Screenshot/screenshot.schema";
import resolvers from "./graphql/Screenshot/screenshots.resolvers";

const { getServer } = apolloServer({
  config: {
    typeDefs,
    resolvers,
  },
});

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};

export default getServer;
