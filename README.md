# T-Rex Stack 🦖

A fully type-safe full-stack TypeScript template featuring tRPC, React Router v7, Express, Prisma and MongoDB.

## 🚀 Tech Stack

### Frontend
- 📝 TypeScript
- ⚛️ React 19
- 🛣️ React Router v7
- 🎨 TailwindCSS
- 🎯 shadcn/ui components
- 🔄 TanStack Query
- 🔒 better-auth for authentication
- 📡 tRPC client
- 🎯 Type-safe forms with react-hook-form & zod

### Backend
- 📝 TypeScript
- 📡 Express.js
- 🗄️ MongoDB (with Docker Compose)
- 🔗 Prisma ORM
- 🔒 better-auth
- 📨 tRPC server
- 📐 Zod for runtime type validation

## ✨ Type Safety Features

- End-to-end type safety with TypeScript and tRPC
- Type-safe database queries with Prisma
- Type-safe API routes and validators
- Type-safe forms and validations
- Automated type generation for API endpoints

## 🛠️ Prerequisites

- Node.js 18+
- Docker and Docker Compose
- pnpm (recommended) or npm

## 🏃‍♂️ Getting Started

1. Clone the repository:
```bash
git clone https://github.com/amanvarshney01/t-rex-stack.git
cd t-rex-stack
```

2. Install dependencies:
```bash
# Install server dependencies
cd server
pnpm install

# Install client dependencies
cd ../client
pnpm install
```

3. Set up MongoDB:
```bash
# Start MongoDB container
cd server
docker-compose up -d
```

4. Set up your environment variables:
```bash
# Server
cd server
cp .env.example .env

# Client
cd ../client
cp .env.example .env
```

5. Initialize the database:
```bash
cd server
pnpm db:push
```

6. Start the development servers:
```bash
# Terminal 1 - Start the backend
cd server
pnpm dev

# Terminal 2 - Start the frontend
cd client
pnpm dev
```

## 📝 Scripts

### Server

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm db:push    # Push schema changes to database
pnpm db:studio  # Open Prisma Studio
```

### Client

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm typecheck  # Type check the application
```
