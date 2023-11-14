// Import MUI theme
import { createTheme } from '@mui/material/styles';

// Create the theme
const theme = createTheme({
  typography: {
    fontFamily: 'Azo Sans, sans-serif',
  },
  '@font-face': {
    fontFamily: 'Azo Sans',
    src: `
      url('./fonts/AzoSans-Regular.ttf') format('truetype'), /* Adjust the path accordingly */
      url('./fonts/AzoSans-Bold.ttf') format('truetype') /* Adjust the path accordingly */
    `,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  palette: {
    primary: {
      main: '#3f51b5', // Set your primary color
    },
    background: {
      default: '#f4f4f4', // Set your default background color
    },
  },
  // Add more theme customization as needed
});

export default theme;
