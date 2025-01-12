import { trpc } from "@/utils/trpc";

export default function DashboardIndex() {
  const healthCheck = trpc.healthCheck.useQuery();
  const logServer = trpc.logServer.useMutation();

  return (
    <div>
      {healthCheck.data}
      <button
        onClick={async () =>
          logServer.mutateAsync({
            message: "Hello from the client",
          })
        }
      >
        click me
      </button>
    </div>
  );
}
