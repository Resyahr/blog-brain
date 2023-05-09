//React Hooks
import { useNavigate } from "react-router-dom";

//Firebase Utils
import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

//CSS Components
import { Button } from "flowbite-react";

function HeroCta({ Link, data }) {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (user) navigate("/");
  };

  return (
    <div className="flex gap-5 mt-8">
      <Button
        onClick={handleRedirect}
        gradientDuoTone="pinkToOrange"
        className="text-divider"
      >
        <Link to={"/signup"}>{data?.navbarLinks["link-one"]}</Link>
      </Button>
      <Button className="border border-secondary bg-transparent hover:bg-secondary hover:text-primary transition-colors duration-200">
        <Link to={"/signin"} className="">
          {data?.navbarLinks["link-two"]}
        </Link>
      </Button>
    </div>
  );
}

export default HeroCta;