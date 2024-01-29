import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function onLoginUser(e) {
    e.preventDefault();
    try {
      await axios.post("/login", { email, password });
      alert("Login is succesfull");
      setRedirect(true);
    } catch (error) {
      alert("Login is failed");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 flex items-center justify-around grow">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={onLoginUser}>
          <input
            type="email"
            name=""
            placeholder="Your Email@com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="primary">
            Login
          </button>
          <div className="text-center py-2 text-gray-500">
            Don{"'"}t have an account yet ?{" "}
            <Link className="underline text-black" to={"/register"}>
              Register now
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
