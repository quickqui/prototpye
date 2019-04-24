import { MutationResolvers } from "../generated/graphqlgen";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.


export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  createUser: (parent, args, ctx) => {
    // throw new Error("Resolver not implemented");
    const { name } = args
    return ctx.prisma.createUser({
      name: name || "unknown"
    })
  },
  createDraft: (parent, args, ctx) => {
    // throw new Error("Resolver not implemented");
    const { title, content, authorId } = args
    return ctx.prisma.createPost({
      title, content, published: false, author: { connect: { id: authorId } }
    })
  },
  deletePost: (parent, args, ctx) => {
    // throw new Error("Resolver not implemented");
    const { id } = args
    return ctx.prisma.deletePost({
      id
    })
  },
  publish: (parent, args, ctx) => {
    // throw new Error("Resolver not implemented");
    const { id } = args
    return ctx.prisma.updatePost({ where: { id }, data: { published: true } })
  }
};
