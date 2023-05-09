//React Hooks
import { Link } from "react-router-dom";

//Internal Components
import { Title, GoogleButton, Form } from "./AllComponents";

function RegisterForm({ googleLogin, emailPasswordSignUp }) {
  return (
    <div className="p-4 mx-auto sm:p-0 gap-4 md:gap-8 md:w-1/3 lg:w-1/5 h-screen flex flex-col justify-center ">
      <Title />
      <GoogleButton googleLogin={googleLogin} />
      <div className="flex justify-between items-center">
        <hr className="text-red-500 w-16" />
        <span className="text-center">or sign up with</span>
        <hr className="text-red-500 w-16" />
      </div>
      <Form />
      <div>
        <span className="text-sm text-gray-600">
          Have an account already?
          <Link to={"/login"} className="text-blue-700">
            Login here
          </Link>
          .
        </span>
      </div>
    </div>
  );
}

export default RegisterForm;