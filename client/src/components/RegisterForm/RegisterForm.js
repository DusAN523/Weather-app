import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./RegisterForm.css";

export default function Register() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordAgain: "",
  });
  const [message, setMessage] = useState("");

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      label: "E-mail",
      errorMessage: "Invalid e-mail !",
    },
    {
      id: 2,
      name: "password",
      type: "text",
      label: "Password",
      errorMessage: `Password must have at least 8 characters and contain min one number !`,
      pattern: "^[a-zA-Z0-9]{8,}$",
    },
    {
      id: 3,
      name: "passwordAgain",
      type: "text",
      label: "Confirm password",
      errorMessage: "Passwords do not match !",
      pattern: values.password,
    },
  ];

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      delete data["passwordAgain"];

      const response = await fetch(`${backendUrl}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        setMessage("Successfully registered new user!");
      } else {
        const responseBody = await response.json();
        setMessage(`Unsuccessfully registration: ${responseBody.message}`);
      }
    } catch (error) {
      setMessage(`Internal error`);
    }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="register-form-container">
      <h2>Register</h2>
      <div id="success-message">{message}</div>
      <form className="form" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          ></FormInput>
        ))}
        <div className="submitAndLink">
          <button className="submit-btn">submit</button>
        </div>
      </form>
    </div>
  );
}
