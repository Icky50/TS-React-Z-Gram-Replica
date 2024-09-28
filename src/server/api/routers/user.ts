import { eq } from "drizzle-orm";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { users } from "~/server/db/schema";

export const userRouter = createTRPCRouter({
  getUserById: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const user = await ctx.db.select().from(users).where(eq(users.id, input));
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }),

  getCurrentUser: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.session || !ctx.session.user) {
      throw new Error("User not found");
    } else {
        return await ctx.db.select().from(users).where(eq(users.id, ctx.session.user.id));
    }
  }),
});
