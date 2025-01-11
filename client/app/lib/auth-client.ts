import { createAuthClient } from "better-auth/react";
const authClient = createAuthClient({
  baseURL: "http://localhost:8080",
});

export const { signIn, signUp, useSession } = authClient;
