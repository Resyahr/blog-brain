//Form Hook
import { useForm } from "react-hook-form";

//Custom Hooks
import { useEmailAndPasswordLogin } from "./GoogleSignUpContext";

//CSS Components
import { Label, TextInput, Button } from "flowbite-react";

function Form() {
  const { register, handleSubmit } = useForm();
  const { emailPasswordSignUp } = useEmailAndPasswordLogin();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    const { email, password } = data;
    emailPasswordSignUp(email, password);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} method="POST">
      <div>
        <Label htmlFor="firstName" value="Name" />
        <TextInput
          {...register("firstName", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          id="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div>
        <Label htmlFor="lastName" value="Last Name" />
        <TextInput
          {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
          id="lastname"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div>
        <Label htmlFor="email" value="Email" />
        <TextInput
          {...register("email", { required: true })}
          id="email"
          type="text"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <Label htmlFor="password" value="Password" />
        <TextInput
          {...register("password", { required: true })}
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <Button
        type="submit"
        className="bg-primary hover:bg-purple-800 mt-6"
      >
        Create Account
      </Button>
    </form>
  );
}

export default Form;
