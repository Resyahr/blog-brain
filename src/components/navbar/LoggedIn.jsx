import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../utils/firebase";
import { Avatar } from "flowbite-react";

import { BsChevronDown } from "react-icons/bs";

function LoggedIn() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="flex gap-3 items-center">
      <Avatar img={user.photoURL} rounded={true} alt="Avatar" />
      <button>
        <BsChevronDown size={15} />
      </button>
    </div>
  );
}

export default LoggedIn;
