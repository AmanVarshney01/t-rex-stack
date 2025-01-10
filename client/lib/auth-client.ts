import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "http://localhost:8080",
});

export const { signIn, signUp, useSession } = authClient;