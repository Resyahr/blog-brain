//React Hooks
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";

//Internal Components
import { LandingPage, Signup } from "./AllComponents";

//Google SignUp context
import { GoogleLoginProvider } from "./components/signup/GoogleSignUpContext";

function App() {
  return (
    <div>
      <Browser>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/signup"
            element={
              <GoogleLoginProvider>
                <Signup />
              </GoogleLoginProvider>
            }
          />
          <Route path="*" element={"NO"} />
        </Routes>
      </Browser>
    </div>
  );
}

export default App;
