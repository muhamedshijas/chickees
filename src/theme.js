// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFC3C', // Yellow
    },
    secondary: {
      main: '#3F0000', // Deep red
    },
    background: {
      default: '#121212', // Blackish
      paper: '#1A1A1A',
    },
    text: {
      primary: '#ffffff',
      secondary: '#FFFC3C',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default theme;
