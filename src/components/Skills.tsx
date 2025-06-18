
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
      { name: "JavaScript", icon: "JS", color: "#f7df1e" },
      { name: "HTML5", icon: "HTML", color: "#e34f26" },
      { name: "CSS3", icon: "CSS", color: "#1572b6" },
      { name: "SQL", icon: "🗃️", color: "#336791" },
      { name: "C", icon: "C", color: "#00599c" }
    ]
  },
  {
    title: "Frameworks/Libraries",
    skills: [
      { name: "Spring Boot", icon: "🌱", color: "#6db33f" },
      { name: "React JS", icon: "⚛️", color: "#61dafb" },
      { name: "Material-UI", icon: "MUI", color: "#0081cb" },
      { name: "Thymeleaf", icon: "T", color: "#005f0f" }
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
      { name: "Draw.io", icon: "📊", color: "#f08705" },
      { name: "Postman", icon: "📮", color: "#ff6c37" },
      { name: "Docker", icon: "🐳", color: "#2496ed" },
      { name: "Swagger", icon: "📋", color: "#85ea2d" },
      { name: "Jira", icon: "🎫", color: "#0052cc" },
      { name: "IntelliJ IDEA", icon: "💡", color: "#000000" },
      { name: "Visual Studio", icon: "VS", color: "#5c2d91" }
    ]
  }
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ 
      py: { xs: 4, sm: 6, md: 8 },
      px: { xs: 2, sm: 4, md: 0 },
      bgcolor: '#f8fafc'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 3, md: 4 }, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h2"
            sx={{ 
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
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
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              px: { xs: 2, md: 0 }
            }}
          >
            My expertise and technical proficiency
          </Typography>
        </Box>

        <Stack spacing={{ xs: 2, sm: 3, md: 3 }}>
          {skillCategories.map((category) => (
            <Paper 
              key={category.title}
              elevation={0} 
              className="card-hover"
              sx={{ 
                p: { xs: 2, sm: 3, md: 4 }, 
                border: '2px solid',
                borderColor: 'divider',
                borderRadius: 3,
                bgcolor: 'white',
                position: 'relative',
                overflow: 'hidden',
                borderLeft: '4px solid #4285F4'
              }}
            >
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  mb: 2, 
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: 'primary.main'
                  }}
                />
                {category.title}
              </Typography>
              
              <Stack 
                direction="row" 
                spacing={1} 
                flexWrap="wrap"
                sx={{ gap: 1 }}
              >
                {category.skills.map((skill) => (
                  <Box
                    key={skill.name}
                    className="skill-chip"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      bgcolor: 'rgba(66, 133, 244, 0.05)',
                      border: '1px solid rgba(66, 133, 244, 0.1)',
                      textAlign: 'center',
                      minHeight: '36px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(66, 133, 244, 0.1)',
                        borderColor: 'primary.main',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(66, 133, 244, 0.2)'
                      }
                    }}
                  >
                    <Typography 
                      sx={{ 
                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                      }}
                    >
                      {skill.icon}
                    </Typography>
                    <Typography 
                      variant="body2"
                      sx={{ 
                        fontWeight: 500,
                        fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                        color: 'text.primary',
                        lineHeight: 1.2,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
