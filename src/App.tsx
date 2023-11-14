import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./styles/Theme";
import { Container, Flex, GlobalStyles, Box } from "./styles/Global";

import HackerNewsPage from "./pages/HackerNewsPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <HackerNewsPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
