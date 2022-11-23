import React, { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form");
    console.log(email, password);
    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          setError(data.error);
        } else {
          router.push("/");
        }
      });

    setLoading(false);
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-10">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-4 mt-6">
          Sign In
        </h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              className="form-control block w-full px-2 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2 mb-8"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="form-control block w-full px-2 py-2 text-l font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2 mb-8"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>

            {error && <p className="text-red-500 text-xs italic">{error}</p>}

            <p className="text-center text-gray-500 text-sm mt-6">
              <a
                className="text-blue-500 hover:text-blue-700 no-underline hover:underline cursor-pointer text-md mt-6"
                href="/register"
              >
                Don't have an account? Register here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
