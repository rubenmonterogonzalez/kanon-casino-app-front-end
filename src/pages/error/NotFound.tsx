import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-white">
      <h1 className="text-9xl font-extrabold text-gray-700 tracking-widest">
        404
      </h1>
      <div className="bg-gray-600 px-2 text-sm rounded rotate-12 absolute text-white">
        Page Not Found
      </div>
      <button className="mt-5">
        <Link
          to={"/dashboard"}
          className="relative inline-block text-sm font-medium group rounded-sm"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-gray-700 text-white hover:bg-gray-400 rounded-md">
            Go Home
          </span>
        </Link>
      </button>
    </main>
  );
};