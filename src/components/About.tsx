
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack, IconButton } from '@mui/material';
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
  { icon: LocationOnIcon, text: 'Hyderabad', color: '#4285F4', type: 'info' },
  { icon: EmailIcon, text: 'saipriyad28@gmail.com', color: '#34a853', type: 'email', link: 'mailto:saipriyad28@gmail.com' },
  { icon: PhoneIcon, text: '7674838129', color: '#fbbc05', type: 'phone', link: 'tel:+917674838129' },
  { icon: LinkedInIcon, text: 'LinkedIn Profile', color: '#0077b5', type: 'social', clickable: true, link: 'https://linkedin.com' },
  { icon: GitHubIcon, text: 'GitHub Profile', color: '#333', type: 'social', clickable: true, link: 'https://github.com/Saipriya104' }
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
  const handleContactClick = (contact: typeof contactInfo[0]) => {
    if (contact.link) {
      window.open(contact.link, '_blank');
    }
  };

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
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              animation: `${fadeInUp} 0.8s ease-out`
            }}
          >
            About Me
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              fontSize: { xs: '0.9rem', md: '1rem' },
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
                  fontSize: { xs: '1.3rem', md: '1.7rem' },
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
                  fontSize: { xs: '0.9rem', md: '1rem' },
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
                  fontSize: { xs: '0.9rem', md: '1rem' },
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
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
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
                      fontSize: { xs: '0.65rem', md: '0.75rem' },
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
                  mb: 4, 
                  fontWeight: 600,
                  fontSize: { xs: '1.3rem', md: '1.7rem' },
                  color: 'primary.main',
                  textAlign: 'center'
                }}
              >
                📞 Let's Connect
              </Typography>
              
              <Box 
                sx={{ 
                  background: 'linear-gradient(135deg, rgba(66, 133, 244, 0.1) 0%, rgba(155, 93, 229, 0.1) 100%)',
                  borderRadius: 4,
                  p: 3,
                  border: '2px solid rgba(66, 133, 244, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #4285F4, #9b5de5, #e85b9c)',
                  }
                }}
              >
                <Grid container spacing={2}>
                  {contactInfo.map((info, index) => (
                    <Grid component="div" sx={{ width: '100%' }} key={index}>
                      <Card 
                        variant="outlined" 
                        className="card-hover"
                        sx={{ 
                          mb: 2,
                          border: '1px solid rgba(66, 133, 244, 0.3)',
                          borderRadius: 3,
                          overflow: 'hidden',
                          cursor: info.clickable || info.link ? 'pointer' : 'default',
                          bgcolor: 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: 'primary.main',
                            bgcolor: 'rgba(66, 133, 244, 0.08)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(66, 133, 244, 0.2)'
                          }
                        }}
                        onClick={() => handleContactClick(info)}
                      >
                        <CardContent sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 3,
                          py: 2.5
                        }}>
                          <Box
                            sx={{
                              p: 1.5,
                              borderRadius: 2,
                              bgcolor: `${info.color}15`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: `0 4px 15px ${info.color}20`
                            }}
                          >
                            <info.icon sx={{ color: info.color, fontSize: '1.3rem' }} />
                          </Box>
                          <Typography 
                            variant="body1"
                            sx={{ 
                              fontWeight: 500,
                              fontSize: { xs: '0.85rem', md: '0.95rem' },
                              flex: 1
                            }}
                          >
                            {info.text}
                          </Typography>
                          {info.type === 'social' && (
                            <IconButton 
                              size="small"
                              sx={{ 
                                bgcolor: `${info.color}10`,
                                '&:hover': { bgcolor: `${info.color}20` }
                              }}
                            >
                              <info.icon sx={{ fontSize: '1rem', color: info.color }} />
                            </IconButton>
                          )}
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontStyle: 'italic',
                      fontSize: { xs: '0.8rem', md: '0.85rem' }
                    }}
                  >
                    Available for exciting opportunities • Open to collaboration
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
