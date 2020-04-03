import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import schema from './schema';
import resolvers from './resolvers';
import http from 'http';

export default async () => {
  const app = express();

  await createConnection();

  const server = new ApolloServer(
    { typeDefs: schema, 
      resolvers, 
      context: ({ req }) => {
        // pass the request information through to the model
        //console.log('req 1', req.headers)
        //const token = req || '';
      },
      introspection:true,
      playground: true,
    }
  );
  server.applyMiddleware({ app, cors: {
      credentials: true,
      origin: true
    },
   });
  
  const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);

  //console.log('server graphqlPath', server.graphqlPath)
  //console.log('server subscriptionsPath', server.subscriptionsPath)
  return httpServer;
};
