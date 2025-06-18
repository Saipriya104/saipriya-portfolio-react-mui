
import { Box, Container, Typography, Button, Stack, Grid, Avatar } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { keyframes } from '@mui/system';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export default function Hero() {
  return (
    <Box 
      id="home" 
      sx={{
        py: { xs: 8, md: 12 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.1) 0%, rgba(155, 93, 229, 0.1) 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(66, 133, 244, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(155, 93, 229, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(232, 91, 156, 0.08) 0%, transparent 50%)
          `,
          animation: `${pulse} 4s ease-in-out infinite`,
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid 
            component="div" 
            sx={{ 
              width: { xs: '100%', md: '60%' }, 
              textAlign: { xs: 'center', md: 'left' },
              animation: `${fadeInUp} 0.8s ease-out`
            }}
          >
            <Typography 
              variant="subtitle1" 
              color="primary" 
              gutterBottom
              sx={{ 
                fontWeight: 600,
                fontSize: { xs: '1rem', md: '1.1rem' },
                mb: 2
              }}
            >
              👋 Hello, I'm a Full Stack Developer
            </Typography>
            
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                lineHeight: 1.1
              }}
            >
              Saipriya Doddi
            </Typography>
            
            <Typography 
              variant="h3" 
              component="div" 
              className="gradient-text"
              sx={{ 
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                lineHeight: 1.3,
              }}
            >
              Crafting elegant software solutions ✨
            </Typography>
            
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                mb: 4,
                maxWidth: '600px',
                mx: { xs: 'auto', md: 0 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
                fontWeight: 400
              }}
            >
              Full Stack Developer with 2+ years of experience, specializing in Spring Boot, ReactJS, and PostgreSQL. 
              Passionate about building efficient web applications and solving complex challenges with clean, scalable code.
            </Typography>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 3 }}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mb: 4 }}
            >
              <Button 
                variant="contained" 
                size="large"
                className="btn-gradient"
                href="#projects"
                startIcon={<VisibilityIcon />}
                sx={{ 
                  borderRadius: '30px', 
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 8px 25px rgba(66, 133, 244, 0.3)'
                }}
              >
                View My Work
              </Button>
              
              <Button 
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                className="btn-outline"
                sx={{ 
                  borderRadius: '30px', 
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none'
                }}
              >
                Download Resume
              </Button>
            </Stack>

            <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="body2" color="text.secondary">
                📍 Based in Hyderabad
              </Typography>
              <Typography variant="body2" color="text.secondary">
                💼 Available for opportunities
              </Typography>
            </Stack>
          </Grid>
          
          <Grid 
            component="div" 
            sx={{ 
              width: { xs: '100%', md: '40%' }, 
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 4, md: 0 }
            }}
          >
            <Box 
              sx={{
                position: 'relative',
                animation: `${fadeInUp} 1s ease-out 0.3s both`
              }}
            >
              <Box 
                className="floating"
                sx={{
                  width: { xs: '250px', sm: '300px', md: '350px' },
                  height: { xs: '250px', sm: '300px', md: '350px' },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.2) 0%, rgba(155, 93, 229, 0.2) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    right: '-10px',
                    bottom: '-10px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, rgba(66, 133, 244, 0.1), rgba(155, 93, 229, 0.1), rgba(232, 91, 156, 0.1))',
                    zIndex: -1,
                    animation: `${pulse} 3s ease-in-out infinite`
                  }
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: '180px', sm: '220px', md: '250px' },
                    height: { xs: '180px', sm: '220px', md: '250px' },
                    fontSize: { xs: '4rem', sm: '5rem', md: '6rem' },
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontWeight: 700
                  }}
                >
                  SD
                </Avatar>
              </Box>
              
              {/* Floating elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '20%',
                  right: '-20px',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  bgcolor: 'rgba(66, 133, 244, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: `${pulse} 2s ease-in-out infinite 1s`,
                  fontSize: '1.5rem'
                }}
              >
                ⚛️
              </Box>
              
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '30%',
                  left: '-30px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  bgcolor: 'rgba(155, 93, 229, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: `${pulse} 2s ease-in-out infinite 2s`,
                  fontSize: '1.2rem'
                }}
              >
                ☕
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
