import { z } from "zod";
import { t } from "../lib/trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const appRouter = t.router({
  healthCheck: t.procedure.query(() => {
    return "OK";
  }),
  logServer: t.procedure
    .input(
      z.object({
        message: z.string(),
      }),
    )
    .mutation(async (req) => {
      const user = await prisma.user.findFirst({
        select: {
          name: true,
        },
      });
      return user;
    }),
});

export type AppRouter = typeof appRouter;
