import styled from "styled-components";
import { Button } from "./base/Button";
import { Form } from "./Form";
import { ColorPalette } from "./ColorPalette";

const StyleGuide = () => {
  const handleButtonClick = (variant) => {
    console.log(`${variant} clicked!`);
  };

  return (
    <Main>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>

      <p>Body Text</p>
      <p>
        <strong>Bold Text</strong>
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <Button variant="primary" onClick={() => handleButtonClick("Primary")}>
        Button Primary
      </Button>

      <Button
        variant="secondary"
        onClick={() => handleButtonClick("Secondary")}
      >
        Button Secondary
      </Button>

      <Button variant="tertiary" onClick={() => handleButtonClick("Tertiary")}>
        Button Tertiary
      </Button>

      <Button variant="danger" onClick={() => handleButtonClick("Danger")}>
        Button Danger
      </Button>

      <Form />

      <ColorPalette />
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 100px;
`;

export { StyleGuide };
