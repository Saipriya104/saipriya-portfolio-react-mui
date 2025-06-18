
import { Box, Container, Typography, Button, Stack, Grid, Avatar, Chip } from '@mui/material';
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

const sparkle = keyframes`
  0%, 100% {
    opacity: 0;
    transform: rotate(0deg) scale(0);
  }
  50% {
    opacity: 1;
    transform: rotate(180deg) scale(1);
  }
`;

const techFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(5deg);
  }
  66% {
    transform: translateY(-10px) rotate(-5deg);
  }
`;

export default function Hero() {
  const achievements = [
    { label: "2+ Years", desc: "Experience" },
    { label: "10+", desc: "Projects" },
    { label: "100%", desc: "Satisfaction" }
  ];

  const techStack = ["⚛️", "☕", "🗃️", "🎨", "🚀"];

  return (
    <Box 
      id="home" 
      sx={{
        py: { xs: 8, md: 15 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.1) 0%, rgba(155, 93, 229, 0.1) 50%, rgba(232, 91, 156, 0.1) 100%)',
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
            radial-gradient(circle at 20% 80%, rgba(66, 133, 244, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(155, 93, 229, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(232, 91, 156, 0.1) 0%, transparent 50%)
          `,
          animation: `${pulse} 8s ease-in-out infinite`,
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(66, 133, 244, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: `${sparkle} 6s ease-in-out infinite`,
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid 
            component="div" 
            sx={{ 
              width: { xs: '100%', md: '60%' }, 
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            <Box className="section-fade-in">
              <Chip 
                label="👋 Hello, I'm a Full Stack Developer"
                sx={{ 
                  mb: 3,
                  px: 3,
                  py: 1,
                  bgcolor: 'rgba(66, 133, 244, 0.1)',
                  color: 'primary.main',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  border: '1px solid rgba(66, 133, 244, 0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(66, 133, 244, 0.3)'
                  },
                  transition: 'all 0.3s ease'
                }}
              />
            </Box>
            
            <Box className="section-fade-in-delayed">
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.5rem' },
                  lineHeight: 1.1,
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #4285F4 50%, #9b5de5 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                Saipriya Doddi
              </Typography>
            </Box>
            
            <Box className="section-fade-in-delayed-2">
              <Typography 
                variant="h3" 
                component="div" 
                className="gradient-text"
                sx={{ 
                  fontWeight: 700,
                  mb: 4,
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                  lineHeight: 1.3,
                }}
              >
                Crafting elegant software solutions ✨
              </Typography>
            </Box>
            
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                mb: 5,
                maxWidth: '600px',
                mx: { xs: 'auto', md: 0 },
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                fontWeight: 400,
                animation: `${fadeInUp} 1s ease-out 1s both`
              }}
            >
              Full Stack Developer with 2+ years of experience, specializing in Spring Boot, ReactJS, and PostgreSQL. 
              Passionate about building efficient web applications and solving complex challenges with clean, scalable code.
            </Typography>

            {/* Achievement Stats */}
            <Box 
              sx={{ 
                mb: 5,
                animation: `${fadeInUp} 1s ease-out 1.2s both`
              }}
            >
              <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ mb: 4 }}
              >
                {achievements.map((achievement, index) => (
                  <Box 
                    key={achievement.label}
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 3,
                      bgcolor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(66, 133, 244, 0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(66, 133, 244, 0.2)'
                      }
                    }}
                  >
                    <Typography variant="h4" fontWeight={700} color="primary.main">
                      {achievement.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight={500}>
                      {achievement.desc}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 3, sm: 4 }}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ 
                mb: 5,
                animation: `${fadeInUp} 1s ease-out 1.4s both`
              }}
            >
              <Button 
                variant="contained" 
                size="large"
                className="btn-gradient"
                href="#projects"
                startIcon={<VisibilityIcon />}
                sx={{ 
                  borderRadius: '30px', 
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 8px 30px rgba(66, 133, 244, 0.4)',
                  minWidth: '200px'
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
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  minWidth: '200px',
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px'
                  }
                }}
              >
                Download Resume
              </Button>
            </Stack>

            <Stack 
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              alignItems="center"
              sx={{
                animation: `${fadeInUp} 1s ease-out 1.6s both`
              }}
            >
              <Chip 
                icon={<span>📍</span>}
                label="Based in Hyderabad"
                sx={{ 
                  bgcolor: 'rgba(52, 168, 83, 0.1)',
                  color: 'success.main',
                  fontWeight: 500,
                  border: '1px solid rgba(52, 168, 83, 0.2)'
                }}
              />
              <Chip 
                icon={<span>💼</span>}
                label="Available for opportunities"
                sx={{ 
                  bgcolor: 'rgba(255, 193, 7, 0.1)',
                  color: 'warning.main',
                  fontWeight: 500,
                  border: '1px solid rgba(255, 193, 7, 0.2)'
                }}
              />
            </Stack>
          </Grid>
          
          <Grid 
            component="div" 
            sx={{ 
              width: { xs: '100%', md: '40%' }, 
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 6, md: 0 }
            }}
          >
            <Box 
              sx={{
                position: 'relative',
                animation: `${fadeInUp} 1s ease-out 0.5s both`
              }}
            >
              <Box 
                className="floating"
                sx={{
                  width: { xs: '280px', sm: '320px', md: '380px' },
                  height: { xs: '280px', sm: '320px', md: '380px' },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.2) 0%, rgba(155, 93, 229, 0.2) 50%, rgba(232, 91, 156, 0.2) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-15px',
                    left: '-15px',
                    right: '-15px',
                    bottom: '-15px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, rgba(66, 133, 244, 0.1), rgba(155, 93, 229, 0.1), rgba(232, 91, 156, 0.1))',
                    zIndex: -1,
                    animation: `${pulse} 4s ease-in-out infinite`
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '-30px',
                    left: '-30px',
                    right: '-30px',
                    bottom: '-30px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, rgba(66, 133, 244, 0.05), rgba(155, 93, 229, 0.05), rgba(232, 91, 156, 0.05))',
                    zIndex: -2,
                    animation: `${pulse} 6s ease-in-out infinite reverse`
                  }
                }}
              >
                <Avatar
                  sx={{
                    width: { xs: '200px', sm: '240px', md: '280px' },
                    height: { xs: '200px', sm: '240px', md: '280px' },
                    fontSize: { xs: '4.5rem', sm: '5.5rem', md: '6.5rem' },
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontWeight: 700,
                    boxShadow: '0 20px 40px rgba(66, 133, 244, 0.3)',
                    border: '4px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  SD
                </Avatar>
              </Box>
              
              {/* Floating tech stack elements */}
              {techStack.map((tech, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'absolute',
                    width: { xs: '50px', md: '60px' },
                    height: { xs: '50px', md: '60px' },
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    border: '2px solid rgba(66, 133, 244, 0.2)',
                    animation: `${techFloat} ${4 + index}s ease-in-out infinite ${index * 0.5}s`,
                    top: `${20 + (index * 15)}%`,
                    right: index % 2 === 0 ? '-30px' : 'auto',
                    left: index % 2 === 1 ? '-30px' : 'auto',
                    zIndex: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      boxShadow: '0 12px 35px rgba(66, 133, 244, 0.3)'
                    }
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
