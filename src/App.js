import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./lib/theme";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const systemTheme = getTheme(currentTheme);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    console.log("prefersDarkMode: ", prefersDarkMode);

    if (prefersDarkMode) {
      setCurrentTheme("dark");
    }
  }, [setCurrentTheme]);

  return (
    <ThemeProvider theme={systemTheme}>
      <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />

      <Main>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Content>
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export default App;
