
import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea, CardMedia, Chip, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

interface Project {
  title: string;
  description: string[];
  technologies: string[];
  image?: string;
}

const projects: Project[] = [
  {
    title: "Houzer",
    description: [
      "Houzer is a tech-enabled platform that connects housing societies with trusted service providers, offering both redevelopment and professional services to meet diverse needs.",
      "Its Key offerings include HouzerRED for advisory, HouzerPRO for vetted experts, and REducate for educational resources to ensure transparency and ease throughout redevelopment and professional service engagements."
    ],
    technologies: ["Spring Boot", "Java", "ReactJS", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Donation Receipt (Pure Heart)",
    description: [
      "This website helps NGOs and charitable trusts generate compliant donation receipts, with features like automated receipt creation and multi-login support to improve administrative efficiency.",
      "It simplifies donation tracking and documentation, making it easier for organizations to manage donor records and meet regulatory requirements."
    ],
    technologies: ["Spring Boot", "Java", "ReactJS", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              fontWeight: 700,
              mb: 1 
            }}
          >
            Projects
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary"
          >
            Showcasing my recent development work
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid component="div" sx={{ width: { xs: '100%', md: '50%' } }} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  boxShadow: 'none',
                  border: '1px solid',
                  borderColor: 'divider',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h5" component="h3" fontWeight={600}>
                        {project.title}
                      </Typography>
                      <CodeIcon color="primary" />
                    </Box>
                    
                    <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                      {project.description.map((desc, i) => (
                        <Typography component="li" variant="body2" color="text.secondary" key={i} sx={{ mb: 1 }}>
                          {desc}
                        </Typography>
                      ))}
                    </Box>
                    
                    <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                      Technologies Used:
                    </Typography>
                    
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{ 
                            mt: 1,
                            bgcolor: 'rgba(155, 93, 229, 0.1)',
                            color: 'portfolio.purple',
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
