import { ApolloServer } from "@apollo/server";
import { User } from "./user";
import { Posts, } from "./threads";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";

async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
            ${User.typeDefs}
            ${Posts.typeDefs}
            
            type Query {
               ${User.queries}
               ${Posts.queries}
            }

            type Mutation {
               ${User.mutations}
               ${Posts.mutations}
            }
        `,
    resolvers: {
      Query: {
           ...User.resolvers.queries,
           ...Posts.resolvers.queries,
           
      },
      Mutation: {
        ...User.resolvers.mutations,
        ...Posts.resolvers.mutations
      },
    },

  introspection: true, // needed on Render/production
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }) // ✅ enables Sandbox
  ],
  });

  // Start the gql server
  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphqlServer;
