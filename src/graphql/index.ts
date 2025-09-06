import { ApolloServer } from "@apollo/server";
import { User } from "./user";
import { Posts, } from "./threads";

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
  });

  // Start the gql server
  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphqlServer;