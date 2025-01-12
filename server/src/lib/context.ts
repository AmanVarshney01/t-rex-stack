import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { auth } from "./auth";
import { fromNodeHeaders } from "better-auth/node";

export async function createContext(opts: CreateExpressContextOptions) {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(opts.req.headers),
  });

  console.log("sessions: ", session);

  return {
    session,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
