import { fromNodeHeaders, toNodeHandler } from "better-auth/node";
import cors from "cors";
import express from "express";
import { auth } from "./lib/auth";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routers";

const app = express();
const PORT = 8080;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use("/trpc", createExpressMiddleware({ router: appRouter }));

app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json());

// app.get("/api/me", async (req, res) => {
//   const session = await auth.api.getSession({
//     headers: fromNodeHeaders(req.headers),
//   });
//   res.json(session);
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
