
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
  Fade,
  Chip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { keyframes } from '@mui/system';

const logoGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 5px rgba(232, 91, 156, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(232, 91, 156, 0.8), 0 0 30px rgba(232, 91, 156, 0.6);
  }
`;

interface NavLink {
  name: string;
  href: string;
  icon?: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home', icon: '🏠' },
  { name: 'About', href: '#about', icon: '👨‍💻' },
  { name: 'Skills', href: '#skills', icon: '⚡' },
  { name: 'Experience', href: '#experience', icon: '💼' },
  { name: 'Projects', href: '#projects', icon: '🚀' },
  { name: 'Contact', href: '#contact', icon: '📬' }
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

      // Update active section based on scroll position with better detection
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ width: 320, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        p: 3,
        borderBottom: '1px solid',
        borderColor: 'divider',
        background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.1) 0%, rgba(155, 93, 229, 0.1) 100%)'
      }}>
        <Typography variant="h6" sx={{ 
          fontWeight: 700,
          animation: `${logoGlow} 2s ease-in-out infinite`
        }}>
          <span style={{ color: '#e85b9c' }}>S</span>aipriya
        </Typography>
        <IconButton 
          onClick={handleDrawerToggle}
          sx={{
            bgcolor: 'rgba(66, 133, 244, 0.1)',
            '&:hover': { bgcolor: 'rgba(66, 133, 244, 0.2)' }
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {navLinks.map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              onClick={() => handleNavClick(item.href)}
              sx={{ 
                mx: 2,
                borderRadius: 3,
                mb: 1,
                py: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(66, 133, 244, 0.1)',
                  transform: 'translateX(8px)',
                  boxShadow: '0 4px 12px rgba(66, 133, 244, 0.2)'
                },
                ...(activeSection === item.href.substring(1) && {
                  bgcolor: 'rgba(66, 133, 244, 0.15)',
                  color: 'primary.main',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(66, 133, 244, 0.3)'
                })
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                <Typography sx={{ fontSize: '1.2rem' }}>{item.icon}</Typography>
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{
                    fontWeight: activeSection === item.href.substring(1) ? 600 : 500,
                    fontSize: '1rem'
                  }}
                />
                {activeSection === item.href.substring(1) && (
                  <Chip 
                    size="small" 
                    label="Active" 
                    sx={{ 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      fontSize: '0.7rem'
                    }} 
                  />
                )}
              </Box>
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
          bgcolor: scrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.85)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(66, 133, 244, 0.2)' : 'none',
          boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2 }, py: 1 }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: 1, 
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                animation: scrolled ? `${logoGlow} 2s ease-in-out infinite` : 'none',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
              onClick={() => handleNavClick('#home')}
            >
              <span style={{ color: '#e85b9c', fontSize: '1.5rem' }}>S</span>aipriya
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navLinks.map((link) => (
                <Button 
                  key={link.name} 
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link"
                  sx={{ 
                    color: 'text.primary',
                    mx: 0.5,
                    px: 3,
                    py: 1.5,
                    borderRadius: 3,
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(66, 133, 244, 0.08)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(66, 133, 244, 0.2)'
                    },
                    ...(activeSection === link.href.substring(1) && {
                      color: 'primary.main',
                      fontWeight: 600,
                      backgroundColor: 'rgba(66, 133, 244, 0.1)',
                      boxShadow: '0 4px 12px rgba(66, 133, 244, 0.25)',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '30px',
                        height: '3px',
                        bgcolor: 'primary.main',
                        borderRadius: '2px'
                      }
                    })
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ fontSize: '0.9rem' }}>{link.icon}</Typography>
                    {link.name}
                  </Box>
                </Button>
              ))}
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleNavClick('#contact')}
                className="btn-gradient"
                sx={{ 
                  ml: 3, 
                  borderRadius: '25px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 15px rgba(66, 133, 244, 0.4)'
                }}
              >
                💬 Get In Touch
              </Button>
            </Box>
            
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { md: 'none' },
                bgcolor: 'rgba(66, 133, 244, 0.1)',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(66, 133, 244, 0.2)',
                  transform: 'scale(1.1)'
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
              width: 320,
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
              borderRadius: '20px 0 0 20px'
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
