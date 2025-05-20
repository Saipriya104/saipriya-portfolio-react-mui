
import { Box, Container, Typography, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack developer",
    company: "Chidhagni Consulting Private Limited",
    location: "Hyderabad",
    period: "Oct 2023– Present",
    description: [
      "Developed and maintained RESTful APIs using Spring Boot, enforced CORS policies for enhanced security, and used Thymeleaf to generate dynamic PDFs and email templates.",
      "We conducted a thorough API, unit and integration test to ensure the stability, performance and reliability of the application.",
      "Designed and built responsive, user-friendly interfaces with React.js and Material-UI (MUI), delivering a consistent and modern experience across devices."
    ],
    type: "work"
  },
  {
    title: "Engineer Trainee",
    company: "Chidhagni Consulting Private Limited",
    location: "Hyderabad",
    period: "Apr 2023– Sep 2023",
    description: [
      "Developed and maintained Java-based RESTful APIs with Spring Boot to ensure smooth backend operations, while integrating them with front-end components for efficient data flow.",
      "Integrated front-end components with back-end RESTful APIs to enable seamless data flow and enhance user interaction"
    ],
    type: "work"
  },
  {
    title: "B.Tech in Computer Science Engineering",
    company: "Bapatla Engineering College",
    location: "",
    period: "Aug 2018– Jun 2022",
    description: [
      "CGPA: 9.2/10"
    ],
    type: "education"
  }
];

export default function Experience() {
  return (
    <Box sx={{ py: 10, bgcolor: '#f8fafc' }}>
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
            Experience & Education
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary"
          >
            My professional journey and academic background
          </Typography>
        </Box>

        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color="text.secondary">
                <Typography variant="body2" fontWeight={500}>{exp.period}</Typography>
              </TimelineOppositeContent>
              
              <TimelineSeparator>
                <TimelineDot color={exp.type === 'work' ? 'primary' : 'secondary'}>
                  {exp.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
                </TimelineDot>
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              
              <TimelineContent>
                <Paper elevation={0} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
                  <Typography variant="h6" fontWeight={600}>
                    {exp.title}
                  </Typography>
                  
                  <Typography variant="subtitle1" color="primary">
                    {exp.company}
                  </Typography>
                  
                  {exp.location && (
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {exp.location}
                    </Typography>
                  )}
                  
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    {exp.description.map((desc, i) => (
                      <Typography component="li" variant="body2" key={i} sx={{ mb: 0.5 }}>
                        {desc}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
