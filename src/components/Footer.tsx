
import { Box, Container, Typography, Link, Stack, IconButton, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 6,
        bgcolor: 'background.default' 
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              mb: { xs: 2, md: 0 } 
            }}
          >
            <span className="text-portfolio-pink">S</span>aipriya Doddi
          </Typography>
          
          <Box>
            <Stack direction="row" spacing={1}>
              <IconButton 
                color="primary" 
                aria-label="LinkedIn"
                onClick={() => window.open('https://www.linkedin.com/in/sai-priya-45aab125a/', '_blank')}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                color="primary" 
                aria-label="GitHub"
                onClick={() => window.open('https://github.com/Saipriya104', '_blank')}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                color="primary" 
                aria-label="Email"
                onClick={() => window.open('mailto:saipriyad28@gmail.com', '_blank')}
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>
        
        <Divider sx={{ mb: 3 }} />
        
        <Box 
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Saipriya Doddi. All rights reserved.
          </Typography>
          
          <Box sx={{ mt: { xs: 2, md: 0 } }}>
            <Stack 
              direction="row" 
              spacing={3}
              divider={<Box component="span" sx={{ mx: 1, color: 'text.disabled' }}>•</Box>}
            >
              <Link href="#home" underline="hover" color="text.secondary">
                Home
              </Link>
              <Link href="#about" underline="hover" color="text.secondary">
                About
              </Link>
              <Link href="#projects" underline="hover" color="text.secondary">
                Projects
              </Link>
              <Link href="#contact" underline="hover" color="text.secondary">
                Contact
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
