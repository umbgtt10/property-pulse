import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileMenu = ({ isMobileMenuOpen, isLoggedIn }) => {
  const pathname = usePathname();

  return (
    <div className={isMobileMenuOpen ? "" : "hidden"} id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "bg-black" : ""
          } text-white block rounded-md px-3 py-2 text-base font-medium`}
        >
          Home
        </Link>
        <Link
          href="/properties"
          className={`${
            pathname === "/properties" ? "bg-black" : ""
          } text-white block rounded-md px-3 py-2 text-base font-medium`}
        >
          Properties
        </Link>
        {isLoggedIn && (
          <Link
            href="/properties/add"
            className={`${
              pathname === "/properties/add" ? "bg-black" : ""
            } text-white block rounded-md px-3 py-2 text-base font-medium`}
          >
            Add Property
          </Link>
        )}
        {!isLoggedIn && (
          <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4">
            <span>Login or Register</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
