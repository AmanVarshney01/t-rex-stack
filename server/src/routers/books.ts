import { protectedProcedure, router } from "../lib/trpc";

export const booksRouter = router({
  healthCheck: protectedProcedure.query((opts) => {
    return "OK";
  }),
});
