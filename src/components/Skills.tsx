
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "SQL", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Technologies & Frameworks",
    skills: ["Spring Boot", "React JS", "Material UI (MUI)", "PostgreSQL", "Gradle", "Thymeleaf", "JUnit", "Mockito"]
  }
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ 
      py: { xs: 6, sm: 8, md: 10 },
      px: { xs: 2, sm: 4, md: 0 }
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Technical Skills
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary"
            sx={{ 
              fontSize: { xs: '0.9rem', sm: '1rem' },
              px: { xs: 2, md: 0 }
            }}
          >
            My expertise and technical proficiency
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {skillCategories.map((category) => (
            <Grid component="div" sx={{ width: { xs: '100%', sm: '100%', md: '50%' } }} key={category.title}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: { xs: 2, sm: 3, md: 4 }, 
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-5px)' },
                    boxShadow: 3
                  }
                }}
              >
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 600,
                    fontSize: { xs: '1.15rem', sm: '1.25rem', md: '1.5rem' },
                    borderBottom: '2px solid',
                    borderColor: 'primary.main',
                    pb: 1,
                    display: 'inline-block'
                  }}
                >
                  {category.title}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, sm: 1 } }}>
                  {category.skills.map((skill) => (
                    <Chip 
                      key={skill}
                      label={skill}
                      sx={{ 
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                        py: { xs: 1.5, sm: 2, md: 2.5 },
                        mb: 1,
                        mr: 1,
                        fontWeight: 500,
                        bgcolor: 'rgba(66, 133, 244, 0.1)',
                        color: 'primary.main',
                        '&:hover': {
                          bgcolor: 'rgba(66, 133, 244, 0.2)',
                        }
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
