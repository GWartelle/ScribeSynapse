import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        Scribe
        <span className="px-2 pb-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 rounded-lg text-white">
          Synapse
        </span>
      </Link>
    </Navbar>
  );
}
