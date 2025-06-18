
import { Box, Container, Typography, Paper, Chip, Stack } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
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

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Chidhagni Consulting Private Limited",
    location: "Hyderabad",
    period: "Oct 2023 – Present",
    description: [
      "Developed and maintained RESTful APIs using Spring Boot with robust security implementations including CORS policies",
      "Created dynamic PDF generation and email templating systems using Thymeleaf for enhanced user experience",
      "Implemented comprehensive testing strategies including API, unit, and integration tests to ensure application reliability",
      "Built responsive, user-friendly interfaces with React.js and Material-UI, delivering consistent experiences across all devices"
    ],
    type: "work",
    technologies: ["Spring Boot", "React.js", "Material-UI", "Thymeleaf", "PostgreSQL", "REST APIs"]
  },
  {
    title: "Engineer Trainee",
    company: "Chidhagni Consulting Private Limited",
    location: "Hyderabad",
    period: "Apr 2023 – Sep 2023",
    description: [
      "Developed foundational skills in Java-based RESTful API development using Spring Boot framework",
      "Successfully integrated front-end components with back-end APIs to create seamless data flow",
      "Gained hands-on experience in full-stack development methodologies and best practices"
    ],
    type: "work",
    technologies: ["Java", "Spring Boot", "REST APIs", "Frontend Integration"]
  },
  {
    title: "B.Tech in Computer Science Engineering",
    company: "Bapatla Engineering College",
    location: "Andhra Pradesh",
    period: "Aug 2018 – Jun 2022",
    description: [
      "Graduated with exceptional academic performance - CGPA: 9.2/10",
      "Strong foundation in computer science fundamentals, algorithms, and software engineering principles"
    ],
    type: "education",
    technologies: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"]
  }
];

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: { xs: 8, sm: 10, md: 12 }, bgcolor: 'background.paper' }}>
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
            Experience & Education
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
            My professional journey and academic foundation in technology
          </Typography>
        </Box>

        <Timeline position="alternate" sx={{ animation: `${fadeInUp} 0.8s ease-out 0.4s both` }}>
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color="text.secondary" sx={{ py: 2 }}>
                <Typography 
                  variant="body1" 
                  fontWeight={600}
                  sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
                >
                  {exp.period}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {exp.location}
                </Typography>
              </TimelineOppositeContent>
              
              <TimelineSeparator>
                <TimelineDot 
                  color={exp.type === 'work' ? 'primary' : 'secondary'}
                  sx={{ 
                    p: 1.5,
                    boxShadow: 3,
                    '&:hover': {
                      transform: 'scale(1.1)'
                    },
                    transition: 'transform 0.3s ease'
                  }}
                >
                  {exp.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
                </TimelineDot>
                {index < experiences.length - 1 && <TimelineConnector sx={{ height: 60 }} />}
              </TimelineSeparator>
              
              <TimelineContent sx={{ py: 2 }}>
                <Paper 
                  elevation={0} 
                  className="card-hover"
                  sx={{ 
                    p: { xs: 3, md: 4 }, 
                    border: '2px solid',
                    borderColor: exp.type === 'work' ? 'primary.main' : 'secondary.main',
                    borderRadius: 3,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: exp.type === 'work' 
                        ? 'linear-gradient(90deg, #4285F4, #9b5de5)' 
                        : 'linear-gradient(90deg, #9b5de5, #e85b9c)',
                      borderRadius: '12px 12px 0 0'
                    }
                  }}
                >
                  <Typography 
                    variant="h5" 
                    fontWeight={700}
                    sx={{ 
                      mb: 1,
                      fontSize: { xs: '1.2rem', md: '1.4rem' },
                      color: exp.type === 'work' ? 'primary.main' : 'secondary.main'
                    }}
                  >
                    {exp.title}
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    color="text.primary"
                    sx={{ 
                      mb: 1,
                      fontWeight: 600,
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    {exp.company}
                  </Typography>
                  
                  <Box component="ul" sx={{ pl: 0, mt: 2, mb: 3 }}>
                    {exp.description.map((desc, i) => (
                      <Typography 
                        component="li" 
                        variant="body2" 
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
                            color: exp.type === 'work' ? 'primary.main' : 'secondary.main',
                            fontWeight: 'bold'
                          }
                        }}
                      >
                        {desc}
                      </Typography>
                    ))}
                  </Box>

                  {exp.technologies && (
                    <Box>
                      <Typography 
                        variant="subtitle2" 
                        fontWeight={600} 
                        gutterBottom
                        sx={{ mb: 2, color: 'text.primary' }}
                      >
                        🛠️ Technologies & Skills:
                      </Typography>
                      
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {exp.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: exp.type === 'work' 
                                ? 'rgba(66, 133, 244, 0.1)' 
                                : 'rgba(155, 93, 229, 0.1)',
                              color: exp.type === 'work' ? 'primary.main' : 'secondary.main',
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
                    </Box>
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
