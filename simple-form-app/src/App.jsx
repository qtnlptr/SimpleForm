import { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="container">
        {submitted ? (
          <StepTwo
            username={username}
            email={email}
            password={password}
            password2={password2}
          />
        ) : (
          <Form
            username={username}
            email={email}
            password={password}
            password2={password2}
          />
        )}
      </div>
    </>
  );
}

export default App;
