import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="mt-4 flex items-center justify-around grow">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto">
          <input type="text" name="" placeholder="Name" />
          <input type="email" name="" placeholder="Your Email@com" />
          <input type="password" name="" placeholder="Enter Password" />
          <button type="submit" className="primary">
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            Already have an account ?{" "}
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
