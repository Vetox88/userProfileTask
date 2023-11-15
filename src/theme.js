import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Azo Sans, sans-serif',
  },
  '@font-face': {
    fontFamily: 'Azo Sans',
    src: `
      url('./fonts/AzoSans-Regular.ttf') format('truetype'),
      url('./fonts/AzoSans-Bold.ttf') format('truetype')
    `,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  palette: {
    primary: {
      main: '#3679FF',
    },
    secondary: {
      main: '#252733',
    },
    background: {
      default: '#FAFAFA',
    },
    container: {
      width: '870px',
      height: '960px',
      margin: '32px 0 0 32px',
      backgroundColor: '#FFFFFF', 
      borderRadius: '5px',
      border: '1px solid #E3E8EB',
    },
  },
});

export default theme;
