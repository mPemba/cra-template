import React from "react";
import styled from "styled-components";
import { Eye } from "./icons/eye";
import { EyeFilled } from "./icons/eyeFilled";

const Header = ({ currentTheme, setCurrentTheme }) => {
  return (
    <HeaderMain>
      <Title>Style Guide</Title>
      {currentTheme === "light" ? (
        <ThemeButton
          aria-label="Enable Dark Mode"
          onClick={() => setCurrentTheme("dark")}
        >
          <Eye />
        </ThemeButton>
      ) : (
        <ThemeButton
          aria-label="Enable Light Mode"
          onClick={() => setCurrentTheme("light")}
        >
          <EyeFilled />
        </ThemeButton>
      )}
    </HeaderMain>
  );
};

const HeaderMain = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const Title = styled.h1`
  margin-left: 1rem;
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;
`;

export { Header };
