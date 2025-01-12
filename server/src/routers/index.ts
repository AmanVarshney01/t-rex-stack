import { z } from "zod";
import { publicProcedure, router } from "../lib/trpc";
import { PrismaClient } from "@prisma/client";
import { booksRouter } from "./books";

const prisma = new PrismaClient();

export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "OK";
  }),
  books: booksRouter,
});

export type AppRouter = typeof appRouter;
