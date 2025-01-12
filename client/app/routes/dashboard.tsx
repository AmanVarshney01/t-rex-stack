import { authClient } from "@/lib/auth-client";
import { Book, Loader2 } from "lucide-react";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";

export default function Dashboard() {
  let navigate = useNavigate();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (session) {
      navigate("/dashboard");
    }
  }, [session]);

  if (isPending) {
    return (
      <div className="flex h-svh items-center justify-center">
        <Loader2 size="48" className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="grid h-svh grid-rows-[auto_1fr]">
      <header className="flex flex-row p-4">
        <div className="flex flex-row gap-2">
          <Book />
          <h1>BookMate</h1>
        </div>
      </header>
      <div className="size-full p-4">
        <Outlet />
      </div>
    </div>
  );
}
