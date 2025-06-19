
import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea, CardMedia, Chip, Stack, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
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

interface Project {
  title: string;
  description: string[];
  technologies: string[];
  image?: string;
  category: string;
  impact?: string;
}

const projects: Project[] = [
  {
    title: "Houzer - Real Estate Platform",
    description: [
      "Comprehensive tech-enabled platform connecting housing societies with trusted service providers for redevelopment and professional services",
      "Implemented HouzerRED advisory system, HouzerPRO for expert connections, and REducate for educational resources",
      "Built with scalable architecture supporting multiple user roles and complex workflow management",
      "Enhanced transparency and efficiency in real estate transactions through intuitive UI/UX design"
    ],
    technologies: ["Spring Boot", "Java", "ReactJS", "PostgreSQL", "Material-UI", "REST APIs"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: "Full Stack",
    impact: "Streamlined real estate processes for 500+ housing societies"
  },
  {
    title: "Pure Heart - Donation Management",
    description: [
      "Comprehensive donation management system for NGOs and charitable organizations",
      "Automated compliant receipt generation with multi-organization support and user role management",
      "Implemented robust tracking and documentation features for regulatory compliance",
      "Built intuitive admin dashboard for efficient donor record management and reporting"
    ],
    technologies: ["Spring Boot", "Java", "ReactJS", "PostgreSQL", "PDF Generation", "Email Integration"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Web Application",
    impact: "Improved administrative efficiency by 70% for NGO operations"
  }
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: { xs: 4, sm: 5, md: 6 }, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              animation: `${fadeInUp} 0.8s ease-out`
            }}
          >
            Featured Projects
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
            Showcasing my latest work in full-stack development and innovative solutions
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {projects.map((project, index) => (
            <Grid component="div" sx={{ width: { xs: '100%', lg: '100%' } }} key={index}>
              <Card 
                className="card-hover"
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  boxShadow: 'none',
                  border: '2px solid',
                  borderColor: 'divider',
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  animation: `${fadeInUp} 0.8s ease-out ${0.4 + index * 0.2}s both`,
                  '&:hover': {
                    borderColor: 'primary.main',
                    '& .project-image': {
                      transform: 'scale(1.05)'
                    }
                  }
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                    sx={{ 
                      transition: 'transform 0.5s ease',
                      objectFit: 'cover'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}
                  >
                    {project.category}
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      p: 1,
                      borderRadius: 2,
                      display: 'flex',
                      gap: 1
                    }}
                  >
                    <Button
                      size="small"
                      startIcon={<LaunchIcon />}
                      sx={{ minWidth: 'auto', p: 0.5 }}
                    >
                    </Button>
                    <Button
                      size="small"
                      startIcon={<GitHubIcon />}
                      sx={{ minWidth: 'auto', p: 0.5 }}
                    >
                    </Button>
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 } }}>
                  <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      fontWeight={700}
                      sx={{ 
                        fontSize: { xs: '1.3rem', md: '1.5rem' },
                        color: 'primary.main'
                      }}
                    >
                      {project.title}
                    </Typography>
                    <CodeIcon color="primary" />
                  </Box>

                  {project.impact && (
                    <Box 
                      sx={{ 
                        mb: 2, 
                        p: 2, 
                        bgcolor: 'rgba(52, 168, 83, 0.1)',
                        borderRadius: 2,
                        border: '1px solid rgba(52, 168, 83, 0.2)'
                      }}
                    >
                      <Typography 
                        variant="body2" 
                        color="success.main"
                        fontWeight={600}
                        sx={{ fontSize: '0.9rem' }}
                      >
                        💡 Impact: {project.impact}
                      </Typography>
                    </Box>
                  )}
                  
                  <Box component="ul" sx={{ pl: 0, mb: 3 }}>
                    {project.description.map((desc, i) => (
                      <Typography 
                        component="li" 
                        variant="body2" 
                        color="text.secondary" 
                        key={i} 
                        sx={{ 
                          mb: 1.5,
                          lineHeight: 1.6,
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          listStyleType: 'none',
                          position: 'relative',
                          pl: 2,
                          '&::before': {
                            content: '"▸"',
                            position: 'absolute',
                            left: 0,
                            color: 'primary.main',
                            fontWeight: 'bold'
                          }
                        }}
                      >
                        {desc}
                      </Typography>
                    ))}
                  </Box>
                  
                  <Typography 
                    variant="subtitle2" 
                    fontWeight={600} 
                    gutterBottom
                    sx={{ mb: 2, color: 'text.primary' }}
                  >
                    🛠️ Technologies Used:
                  </Typography>
                  
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: `hsl(${(techIndex * 45) % 360}, 70%, 95%)`,
                          color: `hsl(${(techIndex * 45) % 360}, 70%, 40%)`,
                          fontWeight: 500,
                          '&:hover': {
                            transform: 'translateY(-1px)',
                            boxShadow: 2
                          },
                          transition: 'all 0.3s ease'
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
