import { trpc } from "@/utils/trpc";

export default function DashboardIndex() {
  const healthCheck = trpc.books.healthCheck.useQuery();

  return <div>Server health: {healthCheck.data}</div>;
}
