import styled from "styled-components";

export const SDropDownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem 0;
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

export const SDropDownUl = styled.ul`
  width: 10rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem 0;
  list-style: none;
`;

export const SDropDownLi = styled.li`
  padding: 0.3rem;
  text-align: left;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;
