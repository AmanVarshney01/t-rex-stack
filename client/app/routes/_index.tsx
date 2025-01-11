import SignUpForm from "@/components/sign-up-form";
import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex h-svh items-center justify-center">
      <SignUpForm />
    </div>
  );
}
