import styled from "styled-components";
import { TitleBox } from "./ResultsPage";
import HeartIcon from "../heart.svg";
import HeartFilledIcon from "../heart-selected.svg";
import ShareIcon from "../share.svg";
import AddIcon from "../add.svg";

/* Rectangle 3 */
const Rectangle = styled.span`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 30px;
  background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8),
    10px 10px 20px rgba(166, 180, 200, 0.7);
  border-radius: 20px;

  &:hover {
    box-shadow: -8px -8px 12px rgba(255, 255, 255, 0.5),
      8px 8px 12px rgba(166, 180, 200, 0.5);
    cursor: pointer;
  }
`;

const IconButton = styled.span`
  position: relative;
  width: 47px;
  box-sizing: border-box;
  padding: 10px 10px;
  background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8),
    10px 10px 20px rgba(166, 180, 200, 0.7);
  border-radius: 20px;

  &:hover {
    box-shadow: -8px -8px 12px rgba(255, 255, 255, 0.5),
      8px 8px 12px rgba(166, 180, 200, 0.5);
    cursor: pointer;
  }
`;

/* vegetables 29.11.2001 */
const Text = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #686868;
`;

const FixedButton = styled.div`
box-sizing: border-box;
position: fixed;
bottom: 95px;
width: 97px;
height: 96px;
background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8), 10px 10px 20px rgba(166, 180, 200, 0.7);
border-radius: 40px;
padding-top: 31px;

&:hover {
  box-shadow: -8px -8px 12px rgba(255, 255, 255, 0.5),
    8px 8px 12px rgba(166, 180, 200, 0.5);
  cursor: pointer;
}
`;

const ListItem = ({ isSelected, children }) => {
  return (
    <div
      style={{
        height: "47px",
        display: "flex",
        justifyContent: "center",
        width: "600px",
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Rectangle style={{ "margin-right": "32px" }}>
        <Text>{children}</Text>
      </Rectangle>
      <IconButton style={{ "margin-right": "10px" }}>
        <img
          src={isSelected ? HeartFilledIcon : HeartIcon}
          alt="Favorite"
          style={{
            top: "14px",
            left: "14px",
            display: "absolute",
          }}
        />
      </IconButton>
      <IconButton>
        <img
          src={ShareIcon}
          alt="Share"
          style={{
            top: "14px",
            left: "14px",
            display: "absolute",
          }}
        />
      </IconButton>
    </div>
  );
};

const HomePage = () => {
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
          History of shopping lists
        </p>

        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            width: "600px",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            gap: "17px",
          }}
        >
          <ListItem>Text</ListItem>
          <ListItem isSelected={true} >Some other text</ListItem>
        </div>

        <FixedButton>
          <img src={AddIcon} alt="Add new list" style={{
            top: "14px",
            left: "14px",
            display: "absolute",
          }}/>
        </FixedButton>
      </div>
    </div>
  );
};

export default HomePage;
