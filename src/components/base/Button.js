import styled from "styled-components";

const Button = ({ children, variant }) => (
  <ButtonMain variant={variant}>{children}</ButtonMain>
);

const ButtonMain = styled.button`
  width: 200px;
  padding: 1rem 2rem;
  margin: 1rem 0;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-family: "Helvetica Neue", sans-serif;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

  background: ${(props) => {
    switch (props.variant) {
      case "primary":
        return props.theme.blue;
      case "secondary":
        return props.theme.background;
      case "tertiary":
        return props.theme.grey200;
      case "danger":
        return props.theme.red;
      case "submit":
        return props.theme.green;
      default:
        return props.theme.blue;
    }
  }};
  border: ${(props) => {
    if (props.variant === "secondary") {
      return `1px solid ${props.theme.text}`;
    } else {
      return "none";
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return props.theme.white;
      case "secondary":
        return props.theme.text;
      case "tertiary":
        return props.theme.black;
      case "danger":
        return props.theme.white;
      case "submit":
        return props.theme.white;
      default:
        return props.theme.white;
    }
  }};

  &:hover {
    opacity: 0.8;
  }
`;

export { Button };
