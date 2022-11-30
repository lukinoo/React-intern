import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  SDropDownWrapper,
  SDropDownButton,
  SDropDownSVGWrapper,
  SDropDownUl,
  SDropDownLi,
  SDropDownArrowMotion,
  SDropDownValue,
} from "./DropDown.styled";
import { arrowVariants, itemVariants, valueVariants } from "./variants";

export const Dropdown = ({ words }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState();

  const handleSelected = (word) => {
    setSelectedWord(word);
    setIsOpen(false);
  };

  return (
    <SDropDownWrapper animate={isOpen ? "open" : "closed"}>
      <SDropDownButton onClick={() => setIsOpen(!isOpen)}>
        {!selectedWord && "Drop Down"}
        {selectedWord && selectedWord}
        <SDropDownSVGWrapper>
          <SDropDownArrowMotion variants={arrowVariants}>
            <AiFillCaretDown fill="#ffffff" />
          </SDropDownArrowMotion>
        </SDropDownSVGWrapper>
      </SDropDownButton>
      <AnimatePresence>
        {isOpen && (
          <SDropDownUl
            initial="closed"
            animate="open"
            exit="closed"
            transition={{
              staggerChildren: 0.045,
            }}
          >
            {words.map((word) => {
              return (
                <SDropDownLi
                  key={word}
                  onClick={() => handleSelected(word)}
                  variants={itemVariants}
                >
                  <SDropDownValue
                    variants={valueVariants}
                    initial={"base"}
                    whileHover="hovered"
                    whileTap="clicked"
                  >
                    {word}
                  </SDropDownValue>
                </SDropDownLi>
              );
            })}
          </SDropDownUl>
        )}
      </AnimatePresence>
    </SDropDownWrapper>
  );
};
