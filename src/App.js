import { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./lib/theme";
import { StyleGuide } from "./components/StyleGuide";

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
          <StyleGuide />
        </Content>
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;

const Content = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default App;
