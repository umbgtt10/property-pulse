import { useState } from "react";
import MessagesButton from "./LoggedIn/MessagesButton";
import ProfileDropDown from "./LoggedIn/ProfileDropDown";
import ProfileDropDownButton from "./LoggedIn/ProfileDropDownButton";

const LoggedIn = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
      <MessagesButton />
      <div className="relative ml-3">
        <ProfileDropDownButton
          setIsProfileMenuOpen={setIsProfileMenuOpen}
          isProfileMenuOpen={isProfileMenuOpen}
        />
        {isProfileMenuOpen && <ProfileDropDown />}
      </div>
    </div>
  );
};

export default LoggedIn;
