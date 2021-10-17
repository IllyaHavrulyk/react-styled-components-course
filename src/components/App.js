import './App.css';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from 'react';
import Login from './pages/Login';
import Home from "./pages/Home";
import DarkTheme from "../themes/dark";
import LightTheme from "../themes/light";


const GlobalStyle = createGlobalStyle`
  body{
    background: ${p => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${p => p.theme.bodyFontColor};
    font-family: "Kaushan Script";
  }
`

function App() {
  const [theme, setTheme] = useState(LightTheme)
  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(s => s.id === "light" ? DarkTheme : LightTheme);
    }}}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;