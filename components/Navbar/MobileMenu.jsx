import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { signIn, useSession, getProviders } from "next-auth/react";
import Link from "next/link";

const MobileMenu = ({ isMobileMenuOpen }) => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();
  }, []);

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
        {session && (
          <Link
            href="/properties/add"
            className={`${
              pathname === "/properties/add" ? "bg-black" : ""
            } text-white block rounded-md px-3 py-2 text-base font-medium`}
          >
            Add Property
          </Link>
        )}
        {!session &&
          providers &&
          Object.values(providers).map((provider, index) => (
            <button
              onClick={() => signIn(provider.id)}
              key={index}
              className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4"
            >
              <span>Login or Register</span>
            </button>
          ))}
      </div>
    </div>
  );
};

export default MobileMenu;
