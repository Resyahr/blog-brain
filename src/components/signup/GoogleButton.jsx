//CSS Components
import { Button } from "flowbite-react";

//Icons
import { FcGoogle } from "react-icons/fc";
function GoogleButton({ googleLogin }) {
  return (
    <div>
      <Button onClick={googleLogin} className="w-full" color="light">
        <FcGoogle size={25} className="mr-4" /> Sign up with Google
      </Button>
    </div>
  );
}

export default GoogleButton;
