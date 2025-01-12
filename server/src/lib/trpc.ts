import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "./context";

export const t = initTRPC.context<Context>().create();

export const router = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(function isAuthed(opts) {
  if (!opts.ctx.session) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }
  return opts.next({
    ctx: {
      session: opts.ctx.session,
    },
  });
});
