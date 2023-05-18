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
export const TitleBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 30px;
  background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8),
    10px 10px 20px rgba(166, 180, 200, 0.7);
  border-radius: 40px;
`;

const ListElementBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 30px;
  background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8),
    10px 10px 20px rgba(166, 180, 200, 0.7);
  border-radius: 40px;
`;

const BtnBox = styled.div`
  box-sizing: border-box;
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

const ListElement = (props) => {
  return (
    <ListElementBox
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
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
        <p
          style={{
            color: "#686868",
            marginBottom: "0",
            marginTop: "15px",
            fontSize: "26px",
            fontWeight: "bold",
          }}
        >
          {props.Title}
        </p>
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            width: "600px",
            textAlign: "center",
            alignItems: "center",
            paddingBottom: "15px",
            paddingTop: "15px",
          }}
        >
          <div
            style={{ color: "#686868", fontSize: "21px", paddingLeft: "30px" }}
          >
            {props.Addres}
          </div>
          <div
            style={{ color: "#686868", fontSize: "21px", paddingRight: "30px" }}
          >
            {props.Km}
          </div>
        </div>

        <p
          style={{
            color: "#686868",
            marginBottom: "10px",
            marginTop: 0,
            fontSize: "31px",
            fontWeight: "bold",
          }}
        >
          {props.Price}
        </p>
      </div>
    </ListElementBox>
  );
};

const ResultsPage = () => {
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
        <TitleBox style={{ marginTop: 30 }}>
          <h1 style={{ color: "#5E6FDF", margin: 0 }}>Results</h1>
        </TitleBox>
        <p style={{ color: "#686868", fontSize: "21px", marginBottom: 36 }}>
          Top 3 results
        </p>

        <ListElement
          Title={"Hofer"}
          Addres={"Mariborska cesta 15"}
          Km={"16km"}
          Price={"88.33€"}
        />
        <ListElement
          Title={"Hofer1"}
          Addres={"Mariborska cesta 15"}
          Km={"16km"}
          Price={"88.33€"}
        />
        <ListElement
          Title={"Hofer2"}
          Addres={"Mariborska cesta 15"}
          Km={"16km"}
          Price={"88.33€"}
        />
        <ListElement
          Title={"Hofer3"}
          Addres={"Mariborska cesta 15"}
          Km={"16km"}
          Price={"88.33€"}
        />

        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            width: "600px",
            textAlign: "center",
            alignItems: "center",
            paddingBottom: "15px",
            paddingTop: "15px",
          }}
        >
          <BtnBox style={{ marginTop: 15 }}>
            <p
              style={{
                padding: "15px 40px",
                fontWeight: "bold",
                color: "#5E6FDF",
                fontSize: "32px",
                margin: "10px 30px",
              }}
            >
              Edit list
            </p>
          </BtnBox>
          <BtnBox style={{ marginTop: 15, padding: "15px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path
                fill={"#5E6FDF"}
                d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"
              />
            </svg>
          </BtnBox>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
