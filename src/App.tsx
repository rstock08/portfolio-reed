import React from 'react';
import { Navbar } from './components/Navbar';
import { ThemeProvider, Grid, CssBaseline, makeStyles } from '@material-ui/core';
import { Jumbotron } from './components/Jumbotron';
import { AboutMe } from './components/AboutMe';
import theme from './theme';
import { AppContainer } from './components/AppContainer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer />
    </ThemeProvider>
  );
}
export default App;
