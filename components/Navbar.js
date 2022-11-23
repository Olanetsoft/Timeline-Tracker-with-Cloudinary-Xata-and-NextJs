import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ isAuthenticated }) => {
  const router = useRouter();

  return (
    <div className="relative container mx-auto px-6 flex flex-col space-y-2">
      <div className="flex flex-col space-y-4 pb-10">
        <header className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold text-center">
            <Link href="/" className="text-white-600 hover:text-gray-400">
              Build a Timeline Tracker with Cloudinary, Xata and NextJs
            </Link>
          </h1>
          {isAuthenticated ? (
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                router.push("/upload");
              }}
            >
              Add New Timeline
            </button>
          ) : (
            <button
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                router.push("/register");
              }}
            >
              Register or Login to Create a Timeline
            </button>
          )}
        </header>
      </div>
    </div>
  );
};

export default Navbar;
