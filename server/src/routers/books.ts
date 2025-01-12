import { protectedProcedure, router, t } from "../lib/trpc";

export const booksRouter = router({
  healthCheck: protectedProcedure.query((opts) => {
    console.log(opts.ctx.session);
    return "OK";
  }),
});
