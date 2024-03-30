"use client";
import { useState } from "react";

import MobileMenu from "@/components/Navbar/MobileMenu";
import MainMenu from "@/components/Navbar/MainMenu";
import MobileMenuButton from "@/components/Navbar/MobileMenuButton";
import RightSideMenu from "@/components/Navbar/RightSideMenu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <MobileMenuButton
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
          />
          <MainMenu isLoggedIn={isLoggedIn} />
          <RightSideMenu isLoggedIn={isLoggedIn} />
        </div>
      </div>

      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} isLoggedIn={isLoggedIn} />
    </nav>
  );
};

export default Navbar;
