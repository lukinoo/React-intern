import React from "react";
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
  return (
    <SDropDownWrapper>
      <SDropDownButton>
        Drop Down
        <SDropDownSVGWrapper>
          <AiFillCaretUp fill="#ffffff" />
        </SDropDownSVGWrapper>
      </SDropDownButton>
      <SDropDownUl>
        {words.map((word) => {
          return <SDropDownLi key={word}>{word}</SDropDownLi>;
        })}
      </SDropDownUl>
    </SDropDownWrapper>
  );
};
