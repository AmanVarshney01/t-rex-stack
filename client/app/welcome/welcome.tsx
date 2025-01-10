import { useState } from "react";
import { authClient, useSession } from "../../lib/auth-client";

export default function Welcome() {
  const { data: session, isPending } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isSignUp) {
        const { error } = await authClient.signUp.email(
          {
            email,
            password,
            name,
            image: undefined,
          },
          {
            onSuccess: () => {
              alert("Sign up successful");
            },
            onError: (ctx) => {
              setError(ctx.error.message);
            },
          }
        );
      } else {
        const { error } = await authClient.signIn.email(
          {
            email,
            password,
          },
          {
            onSuccess: () => {
              alert("Sign in successful");
            },
            onError: (ctx) => {
              setError(ctx.error.message);
            },
          }
        );
        if (error) throw new Error(error.message);
      }
      // Clear form
      // setEmail("");
      // setPassword("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6  rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to Bookmate
      </h1>

      {session ? (
        <div className="text-center">
          <p className="mb-4">Signed in as: {session.user.email}</p>
          <button
            onClick={handleSignOut}
            className="bg-red-500  px-4 py-2 rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              {isSignUp && (
                <>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </>
              )}

              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium ">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-indigo-600 hover:text-indigo-800"
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Need an account? Sign Up"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
