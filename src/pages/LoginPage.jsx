export default function LoginPage() {
  return (
    <div className="mt-4 flex items-center justify-around grow">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" name="" id="" placeholder="Your Email@com" />
          <input type="password" name="" id="" placeholder="Enter Password" />
          <button type="submit" className="primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
