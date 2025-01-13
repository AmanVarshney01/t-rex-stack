import { publicProcedure, router } from "../lib/trpc";
import { booksRouter } from "./books";

export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "OK";
  }),
  books: booksRouter,
});

export type AppRouter = typeof appRouter;
