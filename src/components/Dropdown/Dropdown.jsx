import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import {
  SDropDownWrapper,
  SDropDownButton,
  SDropDownSVGWrapper,
  SDropDownUl,
  SDropDownLi,
} from "./DropDown.styled";

export const Dropdown = ({ words }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SDropDownWrapper>
      <SDropDownButton onClick={() => setIsOpen(!isOpen)}>
        Drop Down
        <SDropDownSVGWrapper>
          {isOpen && <AiFillCaretDown fill="#ffffff" />}
          {!isOpen && <AiFillCaretUp fill="#ffffff" />}
        </SDropDownSVGWrapper>
      </SDropDownButton>
      <SDropDownUl>
        {isOpen &&
          words.map((word) => {
            return <SDropDownLi key={word}>{word}</SDropDownLi>;
          })}
      </SDropDownUl>
    </SDropDownWrapper>
  );
};
