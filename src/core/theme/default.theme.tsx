import { createMuiTheme, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// Theme based on these guidelines 
// https://project-quality-assurance.karumi.com/design-collaboration-guidelines.html

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1C97F5',
    },
    secondary: {
      main: '#C4C4C4',
    },
    info: {
      main: '#FFA800',
    },
    success: {
      main: '#00A356',
    },
    error: {
      main: '#E55353',
    },
    background: {
      default: '#FFF',
    },
    text: {
      primary: '#23282E',
      secondary: '#505254',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontSize: 16,
    fontWeightLight: 'lighter',
    fontWeightRegular: 'normal',
    fontWeightMedium: 'bold',
    fontWeightBold: 'bolder',
    h1: {
      fontSize: '82px',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '56px',
      fontWeight: 'bolder',
    },
    h3: {
      fontSize: '40px',
      fontWeight: 'normal',
    },
    h4: {
      fontSize: '34px',
      fontWeight: 'normal',
      textTransform: 'uppercase',
    },
    body1: {
			fontSize: '34px',
			fontWeight: 'normal',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 'normal',
      textTransform: 'capitalize'
    }
  },
});

export default defaultTheme;