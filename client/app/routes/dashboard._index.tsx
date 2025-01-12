import { trpc } from "@/utils/trpc";

export default function DashboardIndex() {
  const healthCheck = trpc.healthCheck.useQuery();
  const logServer = trpc.logServer.useMutation();

  return (
    <div>
      {healthCheck.data}
      <button
        onClick={async () => {
          const res = await logServer.mutateAsync({
            message: "Hello from the client",
          });
          console.log(res?.name);
        }}
      >
        click me
      </button>
    </div>
  );
}
