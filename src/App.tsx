import React from 'react';
import { Navbar } from './components/Navbar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { Jumbotron } from './components/Jumbotron';
import { AboutMe } from './components/AboutMe';


function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ffecb3",
      },
      secondary: {
        main: "#b71c1c",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Jumbotron />
      <AboutMe />
    </ThemeProvider>
  );
}

export default App;
