import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../services/auth";
import { SubmitButton } from "./LoginPage";

/*const SubmitBox = styled.div`
  box-sizing: border-box;
  width: 173px;
  height: 46px;
  background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8),
    10px 10px 20px rgba(166, 180, 200, 0.7);
  border-radius: 40px;
`;*/

const InputBox = styled.div`
  box-sizing: border-box;
  width: 279px;
  height: 59px;
  background: linear-gradient(134.17deg, #eef1f5 4.98%, #e6e9ef 94.88%);
  box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75),
    inset 5px 5px 10px rgba(166, 180, 200, 0.75);
  border-radius: 40px;
  margin: 10px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  font-size: 18px;
  color: #686868;

  &:focus {
    outline: none;
  }
`;

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleClick = async () => {
    if (isLoading) return;
    if (rePassword !== password) return;
    setIsLoading(true);

    try {
      const response = await auth.signup(email, password, null);
      console.log(response);
      navigate("/login");
    } catch (e) {
      alert(e);
    }

    setIsLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          width: "600px",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#686868", fontSize: "21px", marginBottom: 36 }}>
          Sign up
        </p>
        <InputBox>
          <Input
            type="text"
            autocomplete="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <Input
            type="password"
            autocomplete="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <Input
            type="password"
            autocomplete="password"
            placeholder="Reenter your password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </InputBox>
        <SubmitButton
          style={{ marginTop: 36 }}
          isLoading={isLoading}
          onClick={handleClick}
        >
          Registration
        </SubmitButton>
        <Link to="/login" style={{ marginTop: "10px" }}>
          Allready have an account?
        </Link>
      </div>
    </div>
  );
};

export default RegistrationPage;
