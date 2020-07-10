import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
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
