import { createTheme } from '@mui/material/styles';

const baseTheme = {
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      background: 'linear-gradient(45deg, #D96846 30%, #FF6B6B 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      textAlign: 'center',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      textAlign: 'center',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      textAlign: 'center',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      textAlign: 'center',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #D96846 30%, #FF6B6B 90%)',
          color: '#000000',
          '&:hover': {
            background: 'linear-gradient(45deg, #C55A3A 30%, #FF5252 90%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 12px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          '&:hover': {
            backgroundColor: 'rgba(223, 80, 14, 0.86)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: '#FFFFFF',
            '&:hover fieldset': {
              borderColor: '#D96846',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#000000',
          },
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: '#D96846',
      light: '#FF6B6B',
      dark: '#C55A3A',
      contrastText: '#000000',
    },
    secondary: {
      main: '#FF6B6B',
      light: '#FF8585',
      dark: '#FF5252',
      contrastText: '#000000',
    },
    background: {
      default: '#E6E6FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: '#FF6B6B',
      light: '#FF8585',
      dark: '#FF5252',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D96846',
      light: '#E17B5D',
      dark: '#C55A3A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#1A1A1A',
      paper: '#2D2D2D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
    },
    mode: 'dark',
  },
});

export default lightTheme; 