import { PrismaClient } from "@prisma/client";
import { fromNodeHeaders, toNodeHandler } from "better-auth/node";
import cors from "cors";
import express, { Request, Response } from "express";
import { auth } from "./lib/auth";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json());

app.use((req, res, next) => {
  console.log("Incoming request:", {
    method: req.method,
    path: req.path,
    body: req.body,
    headers: req.headers,
  });
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.get("/api/me", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  res.json(session);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

// async function fetchPrisma() {
//   const users = await prisma.user.findMany({
//     select: {
//       email: true,
//     },
//   });
//   console.log(users);
// }

// fetchPrisma()
//   .catch(async (e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
