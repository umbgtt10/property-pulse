import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import logo from "@/assets/images/logo-white.png";

const MainMenu = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
      {/* <!-- Logo -->*/}
      <Link className="flex flex-shrink-0 items-center" href="/">
        <Image className="h-10 w-auto" src={logo} alt="PropertyPulse" />
        <span className="hidden md:block text-white text-2xl font-bold ml-2">
          PropertyPulse
        </span>
      </Link>
      {/* <!-- Desktop Menu Hidden below md screens -->*/}
      <div className="hidden md:ml-6 md:block">
        <div className="flex space-x-2">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "bg-black" : ""
            } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
          >
            Home
          </Link>
          <Link
            href="/properties"
            className={`${
              pathname === "/properties" ? "bg-black" : ""
            } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
          >
            Properties
          </Link>
          {session && (
            <Link
              href="/properties/add"
              className={`${
                pathname === "/properties/add" ? "bg-black" : ""
              } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
            >
              Add Property
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
