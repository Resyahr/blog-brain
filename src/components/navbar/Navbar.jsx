import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../utils/firebase";

import { Logo, NavCta, Hamburger, MobileLinks } from "./AllComponents";

import data from "../../data.json";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hideMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute w-full flex items-center justify-between p-6 md:px-12 lg:px-32 xl:px-48 2xl:px-72 text-white">
      <Logo data={data} />

      <NavCta data={data} user={user} hideMenu={hideMenu} />

      <Hamburger isOpen={isOpen} handleMenu={handleMenu} />

      <MobileLinks data={data} isOpen={isOpen} />
    </nav>
  );
}

export default Navbar;