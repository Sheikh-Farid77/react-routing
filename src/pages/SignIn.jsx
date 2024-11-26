import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email == "sagor@gmail.com" && password == 123456) {
      const user = {
        name: "Sheikh Farid",
        email: "sagor@gmail.com",
        city: "Natore",
        country: "Bangladesh",
      };
      navigate("/profile", { state: user });
    } else {
      navigate("/signin");
    }
  };
  return (
    <div>
      <form className="text-center" onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          className="w-full h-10 border border-black rounded-md px-3"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          className="w-full h-10 border border-black mt-5 rounded-md px-3"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <br />
        <button className="px-8 py-3 rounded-lg bg-green-300 mt-5 font-bold">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
