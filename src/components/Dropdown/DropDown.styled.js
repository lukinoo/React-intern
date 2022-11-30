import { motion } from "framer-motion";
import styled from "styled-components";

export const SDropDownWrapper = styled(motion.div)`
  position: relative;
`;

export const SDropDownButton = styled.button`
  width: 10rem;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 0.7rem;
  border: 2px solid #ff5f6d;
  background: #ffffff;
  border-radius: 0.2rem;
  outline: none;
  cursor: pointer;
`;

export const SDropDownSVGWrapper = styled.span`
  height: 100%;
  width: 2rem;
  background: #ff5f6d;
  line-height: 2.5rem;
`;

export const SDropDownArrowMotion = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export const SDropDownUl = styled(motion.ul)`
  width: 10rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 3.2rem;
  gap: 0.2rem 0;
  list-style: none;
  z-index: 9;
`;

export const SDropDownLi = styled(motion.li)`
  font-size: 1.2rem;
  cursor: pointer;
`;

export const SDropDownValue = styled(motion.div)`
  padding: 0.3rem;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 0.2rem;
`;
