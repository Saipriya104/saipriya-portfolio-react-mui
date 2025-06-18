
import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
  Fade
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          <span style={{ color: '#e85b9c' }}>S</span>aipriya
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {navLinks.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              onClick={() => handleNavClick(item.href)}
              sx={{ 
                mx: 2,
                borderRadius: 2,
                mb: 1,
                '&:hover': {
                  bgcolor: 'rgba(66, 133, 244, 0.1)',
                },
                ...(activeSection === item.href.substring(1) && {
                  bgcolor: 'rgba(66, 133, 244, 0.15)',
                  color: 'primary.main',
                  fontWeight: 600
                })
              }}
            >
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{
                  fontWeight: activeSection === item.href.substring(1) ? 600 : 400
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        color="transparent"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
          transition: 'all 0.3s ease-in-out',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => handleNavClick('#home')}
            >
              <span style={{ color: '#e85b9c' }}>S</span>aipriya
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button 
                  key={link.name} 
                  onClick={() => handleNavClick(link.href)}
                  sx={{ 
                    color: 'text.primary',
                    mx: 1,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(66, 133, 244, 0.1)',
                      transform: 'translateY(-1px)'
                    },
                    ...(activeSection === link.href.substring(1) && {
                      color: 'primary.main',
                      fontWeight: 600,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '20px',
                        height: '2px',
                        bgcolor: 'primary.main',
                        borderRadius: '2px'
                      }
                    })
                  }}
                >
                  {link.name}
                </Button>
              ))}
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleNavClick('#contact')}
                className="btn-gradient"
                sx={{ 
                  ml: 2, 
                  borderRadius: '25px',
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  textTransform: 'none'
                }}
              >
                Get In Touch
              </Button>
            </Box>
            
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { md: 'none' },
                bgcolor: scrolled ? 'rgba(66, 133, 244, 0.1)' : 'transparent',
                '&:hover': {
                  bgcolor: 'rgba(66, 133, 244, 0.2)'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 280,
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}
