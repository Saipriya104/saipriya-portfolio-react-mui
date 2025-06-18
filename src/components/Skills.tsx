
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: "☕", color: "#f89820" },
      { name: "JavaScript", icon: "🟨", color: "#f7df1e" },
      { name: "HTML5", icon: "🟧", color: "#e34f26" },
      { name: "CSS3", icon: "🔵", color: "#1572b6" },
      { name: "SQL", icon: "🗃️", color: "#336791" }
    ]
  },
  {
    title: "Frameworks/Libraries",
    skills: [
      { name: "Spring Boot", icon: "🌱", color: "#6db33f" },
      { name: "React JS", icon: "⚛️", color: "#61dafb" },
      { name: "Material-UI", icon: "🎨", color: "#0081cb" },
      { name: "Thymeleaf", icon: "📄", color: "#005f0f" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: "🐘", color: "#336791" }
    ]
  },
  {
    title: "Tools/Platforms",
    skills: [
      { name: "Git", icon: "📦", color: "#f05032" },
      { name: "Gradle", icon: "🔧", color: "#02303a" },
      { name: "JUnit", icon: "🧪", color: "#25a162" },
      { name: "Mockito", icon: "🎭", color: "#ff6b6b" }
    ]
  }
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ 
      py: { xs: 6, sm: 8, md: 10 },
      px: { xs: 2, sm: 4, md: 0 },
      bgcolor: '#f8fafc'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              background: 'linear-gradient(135deg, #4285F4 0%, #9b5de5 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
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

        <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
          {skillCategories.map((category) => (
            <Grid component="div" sx={{ width: { xs: '100%', sm: '100%', md: '50%' } }} key={category.title}>
              <Paper 
                elevation={0} 
                className="card-hover"
                sx={{ 
                  p: { xs: 3, sm: 4, md: 5 }, 
                  height: '100%',
                  border: '2px solid',
                  borderColor: 'divider',
                  borderRadius: 4,
                  bgcolor: 'white',
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
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    mb: 4, 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: 'primary.main'
                    }}
                  />
                  {category.title}
                </Typography>
                
                <Grid container spacing={2}>
                  {category.skills.map((skill) => (
                    <Grid component="div" sx={{ width: { xs: '50%', sm: '50%' } }} key={skill.name}>
                      <Box
                        className="skill-chip"
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          p: 2,
                          borderRadius: 3,
                          bgcolor: 'rgba(66, 133, 244, 0.05)',
                          border: '2px solid rgba(66, 133, 244, 0.1)',
                          textAlign: 'center',
                          minHeight: '80px',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(66, 133, 244, 0.1)',
                            borderColor: 'primary.main',
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 25px rgba(66, 133, 244, 0.2)'
                          }
                        }}
                      >
                        <Typography 
                          sx={{ 
                            fontSize: { xs: '1.5rem', md: '1.8rem' },
                            mb: 1,
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                          }}
                        >
                          {skill.icon}
                        </Typography>
                        <Typography 
                          variant="body2"
                          sx={{ 
                            fontWeight: 600,
                            fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                            color: 'text.primary',
                            lineHeight: 1.2
                          }}
                        >
                          {skill.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
