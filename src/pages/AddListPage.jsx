import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "../components/Dropdown";
import { shopsData } from "../data/shops";

const TitleBox = styled.div`
  box-sizing: border-box;
  width: 328px;
  height: 53px;
  background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8),
    10px 10px 20px rgba(166, 180, 200, 0.7);
  border-radius: 40px;
`;

const InputBox = styled.div`
  box-sizing: border-box;
  width: 240px;
  height: 46px;
  background: linear-gradient(134.17deg, #eef1f5 4.98%, #e6e9ef 94.88%);
  box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75),
    inset 5px 5px 10px rgba(166, 180, 200, 0.75);
  border-radius: 40px;
  margin-bottom: 10px;
  margin-right: 5px;
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

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  z-index: 1;
`;

const DropdownListItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const List = styled.div`
  box-sizing: border-box;
  width: 299px;
  height: 300px;
  background: linear-gradient(134.17deg, #eef1f5 4.98%, #e6e9ef 94.88%);
  box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75),
    inset 5px 5px 10px rgba(166, 180, 200, 0.75);
  border-radius: 40px;
`;

const AddBox = styled.div`
  box-sizing: border-box;
  width: 46px;
  height: 46px;
  background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8),
    10px 10px 20px rgba(166, 180, 200, 0.7);
  border-radius: 40px;
  transition: all 0.6s ease-in-out;

  // Disable hover effect when loading
  ${() =>
    true &&
    `
    &:hover {
      box-shadow: -8px -8px 12px rgba(255, 255, 255, 0.5),
        8px 8px 12px rgba(166, 180, 200, 0.5);
      cursor: pointer;
    }
  `}
`;

const SubmitBox = styled.div`
  box-sizing: border-box;
  width: 173px;
  height: 46px;
  background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8),
    10px 10px 20px rgba(166, 180, 200, 0.7);
  border-radius: 40px;
  transition: all 0.6s ease-in-out;
  ${({ isLoading }) =>
    isLoading &&
    `
    box-shadow: inset 5px 5px 10px #d6d9e3, inset -5px -5px 10px #f7f9fc;
  `}
  // Disable hover effect when loading
  ${({ isLoading }) =>
    !isLoading &&
    `
    &:hover {
      box-shadow: -8px -8px 12px rgba(255, 255, 255, 0.5),
        8px 8px 12px rgba(166, 180, 200, 0.5);
      cursor: pointer;
    }
  `}
`;

const SubmitButton = ({ isLoading, onClick }) => {
  return (
    <SubmitBox
      style={{ marginTop: 36 }}
      isLoading={isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <p style={{ marginTop: 12, padding: 0, color: "#4CE0E9" }}>
          Loading...
        </p>
      ) : (
        <p style={{ marginTop: 12, padding: 0, color: "#4CE0E9" }}>
          Calculate!
        </p>
      )}
    </SubmitBox>
  );
};

const TitleComponent = () => {
  return (
    <TitleBox style={{ marginTop: 36 }}>
      <p
        style={{
          marginTop: 5,
          padding: 0,
          color: "#4CE0E9",
          fontSize: 32,
        }}
      >
        Add List
      </p>
    </TitleBox>
  );
};

const AddButton = ({ onClick }) => {
  return (
    <AddBox style={{}} onClick={onClick}>
      <p style={{ marginTop: 12, padding: 0, color: "#686868" }}>+</p>
    </AddBox>
  );
};

const AddListPage = () => {
  const [addedItems, setAddedItems] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleAddButtonClick = () => {
    if (selectedProduct !== "") {
      setAddedItems((prevItems) => [...prevItems, selectedProduct]);
      console.log("Selected product added to the list:", selectedProduct);
    }
  };

  const handleSelectProduct = (name) => {
    setSelectedProduct(name);
  };

  function findClosestShops() {
    const filteredShops = shopsData
      .filter((shop) =>
        shop.products.some((product) => addedItems.includes(product.name))
      )
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);

    const closestShops = filteredShops.map((shop) => {
      const products = shop.products.filter((product) =>
        addedItems.includes(product.name)
      );
      const totalPrice = products.reduce(
        (sum, product) => sum + product.price,
        0
      );

      return {
        name: shop.name,
        distance: shop.distance,
        products,
        street: shop.street,
        totalPrice,
      };
    });

    return closestShops;
  }

  const handleClick = () => {
    setIsLoading(true);
    const closestShops = findClosestShops();
    setIsLoading(false);
    navigate("/results", { state: { closestShops } });
  };

  const productNames = shopsData.flatMap((shop) =>
    shop.products.map((product) => product.name)
  );

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
        <TitleComponent />
        <p style={{ color: "#686868", fontSize: "18px", marginBottom: 36 }}>
          Add a list and get the best offer
        </p>
        <div
          style={{
            display: "flex",
          }}
        >
          <Dropdown
            options={productNames}
            onSelect={handleSelectProduct}
            selectedOption={selectedProduct}
          />
          <AddButton onClick={handleAddButtonClick} />
        </div>
        <List>
          {addedItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </List>

        <SubmitButton isLoading={isLoading} onClick={handleClick} />
      </div>
    </div>
  );
};

export default AddListPage;
