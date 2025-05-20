
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#4285F4', // Google Blue
      light: '#5e97f6',
      dark: '#3367d6',
    },
    secondary: {
      main: '#9b5de5', // Purple
      light: '#b47deb',
      dark: '#8041c6',
    },
    error: {
      main: '#ea4335', // Google Red
    },
    warning: {
      main: '#fbbc05', // Google Yellow
    },
    info: {
      main: '#4285F4', // Google Blue
    },
    success: {
      main: '#34a853', // Google Green
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
        },
      },
    },
  },
});

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default Index;
