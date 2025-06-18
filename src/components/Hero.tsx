
import { Box, Container, Typography, Button, Stack, Grid, Chip } from '@mui/material';
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
    { label: "100%", desc: "Satisfaction" }
  ];

  const techStack = ["⚛️", "☕", "🗃️", "🎨", "🚀"];

  return (
    <Box 
      id="home" 
      sx={{
        py: { xs: 4, md: 6 },
        minHeight: '85vh',
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
        <Grid container spacing={3} alignItems="center">
          <Grid 
            component="div" 
            sx={{ 
              width: '100%',
              textAlign: 'center'
            }}
          >
            <Box className="section-fade-in">
              <Chip 
                label="👋 Hello, I'm a Full Stack Developer"
                sx={{ 
                  mb: 2,
                  px: 2,
                  py: 0.5,
                  bgcolor: 'rgba(66, 133, 244, 0.1)',
                  color: 'primary.main',
                  fontWeight: 600,
                  fontSize: { xs: '0.7rem', md: '0.8rem' },
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
                  mb: 1,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
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
                  mb: 2,
                  fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' },
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
                mb: 3,
                maxWidth: '600px',
                mx: 'auto',
                fontSize: { xs: '0.85rem', md: '0.95rem' },
                lineHeight: 1.6,
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
                mb: 3,
                animation: `${fadeInUp} 1s ease-out 1.2s both`
              }}
            >
              <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                sx={{ mb: 2 }}
              >
                {achievements.map((achievement, index) => (
                  <Box 
                    key={achievement.label}
                    sx={{
                      textAlign: 'center',
                      p: 2,
                      borderRadius: 3,
                      bgcolor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(66, 133, 244, 0.2)',
                      transition: 'all 0.3s ease',
                      minWidth: '120px',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 20px rgba(66, 133, 244, 0.2)'
                      }
                    }}
                  >
                    <Typography variant="h4" fontWeight={700} color="primary.main" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                      {achievement.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontWeight={500} sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' } }}>
                      {achievement.desc}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 2 }}
              justifyContent="center"
              sx={{ 
                mb: 3,
                animation: `${fadeInUp} 1s ease-out 1.4s both`
              }}
            >
              <Button 
                variant="contained" 
                size="medium"
                className="btn-gradient"
                href="#projects"
                startIcon={<VisibilityIcon />}
                sx={{ 
                  borderRadius: '25px', 
                  px: 3,
                  py: 1.2,
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 6px 20px rgba(66, 133, 244, 0.4)',
                  minWidth: '150px'
                }}
              >
                View My Work
              </Button>
              
              <Button 
                variant="outlined"
                size="medium"
                startIcon={<DownloadIcon />}
                className="btn-outline"
                sx={{ 
                  borderRadius: '25px', 
                  px: 3,
                  py: 1.2,
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  minWidth: '150px',
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
              spacing={1.5}
              justifyContent="center"
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
                  border: '1px solid rgba(52, 168, 83, 0.2)',
                  fontSize: { xs: '0.7rem', md: '0.8rem' }
                }}
              />
              <Chip 
                icon={<span>💼</span>}
                label="Available for opportunities"
                sx={{ 
                  bgcolor: 'rgba(255, 193, 7, 0.1)',
                  color: 'warning.main',
                  fontWeight: 500,
                  border: '1px solid rgba(255, 193, 7, 0.2)',
                  fontSize: { xs: '0.7rem', md: '0.8rem' }
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
