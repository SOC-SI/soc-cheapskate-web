import styled from "styled-components";

const SubmitBox = styled.div`
  box-sizing: border-box;
  width: 173px;
  height: 46px;
  background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8),
    10px 10px 20px rgba(166, 180, 200, 0.7);
  border-radius: 40px;
`;

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

const LoginPage = () => {
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
          Welcome back!
        </p>
        <InputBox>
          <Input type="text" placeholder="Enter your text here" />
        </InputBox>
        <InputBox>
          <Input type="text" placeholder="Enter your text here" />
        </InputBox>
        <SubmitBox style={{ marginTop: 36 }}>
          <p style={{ marginTop: 12, padding: 0, color: "#686868" }}>Login</p>
        </SubmitBox>
      </div>
    </div>
  );
};

export default LoginPage;
