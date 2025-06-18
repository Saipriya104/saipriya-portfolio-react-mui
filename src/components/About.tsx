
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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

const contactInfo = [
  { icon: LocationOnIcon, text: 'Hyderabad', color: '#4285F4' },
  { icon: EmailIcon, text: 'saipriyad28@gmail.com', color: '#34a853' },
  { icon: PhoneIcon, text: '7674838129', color: '#fbbc05' },
  { icon: LinkedInIcon, text: 'LinkedIn Profile', color: '#0077b5', clickable: true },
  { icon: GitHubIcon, text: 'GitHub Profile', color: '#333', clickable: true }
];

const softSkills = [
  '🤝 Team Collaboration',
  '⏰ Time Management', 
  '🔄 Adaptability',
  '🎯 Problem Solving',
  '💡 Creative Thinking',
  '📋 Project Management'
];

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 8, sm: 10, md: 12 }, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              animation: `${fadeInUp} 0.8s ease-out`
            }}
          >
            About Me
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              fontSize: { xs: '1rem', md: '1.2rem' },
              maxWidth: '600px',
              mx: 'auto',
              animation: `${fadeInUp} 0.8s ease-out 0.2s both`
            }}
          >
            Get to know me better - my background, skills, and what drives my passion for development
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 6 }}>
          <Grid component="div" sx={{ width: { xs: '100%', lg: '50%' } }}>
            <Box sx={{ animation: `${fadeInUp} 0.8s ease-out 0.4s both` }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: 'primary.main'
                }}
              >
                🚀 Professional Journey
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: 'text.secondary'
                }}
              >
                I'm a passionate Full Stack Developer with 2+ years of hands-on experience in creating 
                robust web applications. My journey began with a strong foundation in computer science, 
                and I've since specialized in modern technologies like Spring Boot, ReactJS, and PostgreSQL.
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: 'text.secondary'
                }}
              >
                I thrive on solving complex challenges, writing clean and scalable code, and collaborating 
                with teams to deliver impactful solutions. My goal is to continuously learn and contribute 
                to meaningful projects that make a difference.
              </Typography>

              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  color: 'primary.main'
                }}
              >
                💪 Soft Skills
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {softSkills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      mb: 1,
                      bgcolor: 'rgba(66, 133, 244, 0.1)',
                      color: 'primary.main',
                      fontWeight: 500,
                      '&:hover': {
                        bgcolor: 'rgba(66, 133, 244, 0.2)',
                        transform: 'translateY(-1px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
          
          <Grid component="div" sx={{ width: { xs: '100%', lg: '50%' } }}>
            <Box sx={{ animation: `${fadeInUp} 0.8s ease-out 0.6s both` }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: 'primary.main'
                }}
              >
                📞 Let's Connect
              </Typography>
              
              <Grid container spacing={2}>
                {contactInfo.map((info, index) => (
                  <Grid component="div" sx={{ width: '100%' }} key={index}>
                    <Card 
                      variant="outlined" 
                      className="card-hover"
                      sx={{ 
                        mb: 2,
                        border: '2px solid',
                        borderColor: 'divider',
                        borderRadius: 3,
                        overflow: 'hidden',
                        cursor: info.clickable ? 'pointer' : 'default',
                        '&:hover': {
                          borderColor: 'primary.main',
                          bgcolor: 'rgba(66, 133, 244, 0.02)'
                        }
                      }}
                    >
                      <CardContent sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 3,
                        py: 3
                      }}>
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            bgcolor: `${info.color}15`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <info.icon sx={{ color: info.color, fontSize: '1.5rem' }} />
                        </Box>
                        <Typography 
                          variant="body1"
                          sx={{ 
                            fontWeight: 500,
                            fontSize: { xs: '0.95rem', md: '1rem' }
                          }}
                        >
                          {info.text}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box 
                sx={{ 
                  mt: 4, 
                  p: 3, 
                  bgcolor: 'primary.main',
                  borderRadius: 3,
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  🎯 Current Focus
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Building scalable web applications • Learning new technologies • 
                  Contributing to open source • Seeking exciting opportunities
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
