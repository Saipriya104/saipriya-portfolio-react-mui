
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
    <Box id="skills" sx={{ py: 10 }}>
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
            Technical Skills
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary"
          >
            My expertise and technical proficiency
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skillCategories.map((category) => (
            <Grid component="div" sx={{ width: { xs: '100%', md: '50%' } }} key={category.title}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
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
                    borderBottom: '2px solid',
                    borderColor: 'primary.main',
                    pb: 1,
                    display: 'inline-block'
                  }}
                >
                  {category.title}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.skills.map((skill) => (
                    <Chip 
                      key={skill}
                      label={skill}
                      sx={{ 
                        fontSize: '0.9rem',
                        py: 2.5,
                        mb: 1,
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
