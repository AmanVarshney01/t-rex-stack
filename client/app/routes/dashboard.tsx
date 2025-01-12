import { Book } from "lucide-react";
import { Outlet } from "react-router";

export default function Dashboard() {
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
