import Image from "next/image";
import profileDefault from "@/assets/images/profile.png";

const ProfileDropDownButton = ({ setIsProfileMenuOpen, isProfileMenuOpen }) => {
  return (
    <div>
      <button
        type="button"
        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">Open user menu</span>
        <Image className="h-8 w-8 rounded-full" src={profileDefault} alt="" />
      </button>
    </div>
  );
};

export default ProfileDropDownButton;
