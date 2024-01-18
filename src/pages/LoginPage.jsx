import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mt-4 flex items-center justify-around grow">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" name="" placeholder="Your Email@com" />
          <input type="password" name="" placeholder="Enter Password" />
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
