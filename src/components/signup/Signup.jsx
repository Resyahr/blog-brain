//React Hooks
import { Link } from "react-router-dom";
import {
  useGoogleLogin,
  useEmailAndPasswordLogin,
  auth,
} from "./GoogleSignUpContext";

//Internal Data
import data from "../../data.json";

//Internal Components
import { SideDecor, RegisterForm } from "./AllComponents";

//CSS Components
import { Spinner } from "flowbite-react";

function Signup() {
  const { googleLogin, isLoading } = useGoogleLogin();
  const { emailPasswordSignUp } = useEmailAndPasswordLogin();

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="flex bg-divider">
      {isLoading ? (
        <>
          <SideDecor data={data} />
          <RegisterForm googleLogin={googleLogin} />
          <div className="absolute w-full h-screen text-center pt-10 mx-auto bg-black/50">
            <Spinner size={"xl"} color={"purple"} />
          </div>
        </>
      ) : (
        <>
          <SideDecor data={data} />
          <RegisterForm googleLogin={googleLogin} />
        </>
      )}
    </div>
  );
}

export default Signup;
