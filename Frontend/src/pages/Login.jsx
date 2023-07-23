import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Add your registration logic here (e.g., sending registration data to the server)
      // Reset form fields after successful registration if needed
      setIsRegistering(false);
    } else {
      // Add your login logic here (e.g., sending login credentials to the server)
      // Redirect to dashboard or do other actions after successful login
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          {isRegistering ? "Register" : "Log in"} to your account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            {isRegistering ? "Register" : "Log In"}
          </button>
          <p className="text-center mt-4">
            {isRegistering ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-blue-500 font-semibold focus:outline-none"
                  onClick={() => setIsRegistering(false)}
                >
                  Log In
                </button>
              </>
            ) : (
              <>
                Don't have an account yet?{" "}
                <button
                  type="button"
                  className="text-blue-500 font-semibold focus:outline-none"
                  onClick={() => setIsRegistering(true)}
                >
                  Register
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
