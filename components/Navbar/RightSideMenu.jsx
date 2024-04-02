import { useSession } from "next-auth/react";
import LoggedOut from "./RightSideMenu/LoggedOut";
import LoggedIn from "./RightSideMenu/LoggedIn";

const RightSideMenu = () => {
  const { data: session } = useSession();

  return <>{session ? <LoggedIn /> : <LoggedOut />}</>;
};

export default RightSideMenu;
