import { QueryResolvers } from "../generated/graphqlgen";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.


export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  feed: (parent, args, ctx) => {
    // throw new Error("Resolver not implemented");
    return ctx.prisma.posts({
      where: {
        published: true
      }
    })
  },
  drafts: (parent, args, ctx) => {
    // throw new Error("Resolver not implemented");
    return ctx.prisma.posts({
      where: {
        published: false
      }
    })
  },
  post: (parent, args, ctx) => {
    // throw new Error("Resolver not implemented");
    const { id } = args
    return ctx.prisma.post({ id })
  }
};
