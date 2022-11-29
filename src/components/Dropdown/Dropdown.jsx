import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import {
  SDropDownWrapper,
  SDropDownButton,
  SDropDownSVGWrapper,
  SDropDownUl,
  SDropDownLi,
} from "./DropDown.styled";

export const Dropdown = ({ words }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState();

  const handleSelected = (word) => {
    setSelectedWord(word);
    setIsOpen(false);
  };

  return (
    <SDropDownWrapper>
      <SDropDownButton onClick={() => setIsOpen(!isOpen)}>
        {!selectedWord && "Drop Down"}
        {selectedWord && selectedWord}
        <SDropDownSVGWrapper>
          {isOpen && <AiFillCaretDown fill="#ffffff" />}
          {!isOpen && <AiFillCaretUp fill="#ffffff" />}
        </SDropDownSVGWrapper>
      </SDropDownButton>
      <SDropDownUl>
        {isOpen &&
          words.map((word) => {
            return (
              <SDropDownLi key={word} onClick={() => handleSelected(word)}>
                {word}
              </SDropDownLi>
            );
          })}
      </SDropDownUl>
    </SDropDownWrapper>
  );
};
