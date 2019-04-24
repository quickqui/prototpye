import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers'
import { Prisma } from '../generated/prisma';

const prisma = new Prisma()


const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
} as any)

server.start(() => console.log('Server is running on http://localhost:4000'))
