import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

import { LoggedIn } from "./AllComponents";

function NavCta({ data, user, hideMenu }) {
  return (
    <div className={`z-50 hidden sm:block`}>
      {!user ? (
        <div className="flex gap-4">
          <Button
            gradientDuoTone="pinkToOrange"
            className="transition-all duration-300"
          >
            <Link
              to={"/signup"}
              onClick={hideMenu}
              className="  text-white font-bold"
            >
              {data?.navbarLinks["link-one"]}
            </Link>
          </Button>

          <Button className="bg-transparent border border-secondary hover:bg-secondary hover:text-primary transition-colors duration-200">
            <Link to={"/singin"} onClick={hideMenu} className="">
              {data?.navbarLinks["link-two"]}
            </Link>
          </Button>
        </div>
      ) : (
        <>
          <LoggedIn />
        </>
      )}
    </div>
  );
}

export default NavCta;
