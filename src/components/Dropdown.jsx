import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { melisearch } from "../services/melisearch";

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

const InputBox = styled.div`
  position: relative;
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

const index = melisearch.index("items");

const Dropdown = ({ onSelect, selectedProduct }) => {
  const [inputValue, setInputValue] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [searchOptions, setSearchOptions] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setDropdownVisible(true);
  };

  const handleSelectOption = (item) => {
    setInputValue(item.name);
    onSelect(item);
    setDropdownVisible(false);
  };

  useEffect(() => {
    (async () => {
      const hits = await index.search(inputValue);
      setSearchOptions(hits.hits);
    })();
  }, [setSearchOptions, inputValue]);

  useEffect(() => {
    if(inputValue !== selectedProduct?.name) {
      onSelect([]);
    }
  }, [inputValue]);

  return (
    <InputBox>
      <Input
        type="text"
        placeholder="Search for Items"
        value={inputValue}
        onChange={handleInputChange}
      />
      {isDropdownVisible && inputValue && (
        <DropdownList>
          {searchOptions.map((item, index) => (
            <DropdownListItem
              key={index}
              onClick={() => handleSelectOption(item)}
            >
              {item.name}
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </InputBox>
  );
};

export default Dropdown;
