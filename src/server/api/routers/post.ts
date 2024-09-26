import { eq, isNotNull, isNull } from "drizzle-orm";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { posts } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(posts).values({
        name: input.name,
        createdById: ctx.session.user.id,
        isPrivate: false,
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.posts.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
  }),

  getLatestById: publicProcedure
    .query(({ ctx }) => {
      let uid = ctx.session?.user.id;
      return uid ? ctx.db.select({name: posts.name}).from(posts).where(eq(posts.createdById, uid)) : undefined;
    }),

  getAllContainingImages: publicProcedure
    .query(({ ctx }) => {
      return ctx.db.select({image: posts.imageUrl, id: posts.id}).from(posts).where(isNotNull(posts.imageUrl));
    })
});
