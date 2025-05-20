
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function About() {
  return (
    <Box id="about" sx={{ py: 10, bgcolor: '#f8fafc' }}>
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
            About Me
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary"
          >
            Professional Background & Contact Information
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Professional Summary</Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Full Stack Developer with 2 years of experience, skilled in Spring Boot, ReactJS, and PostgreSQL. 
              Focused on building efficient web applications, solving complex software challenges, and continuously 
              expanding technical expertise while contributing to impactful team-driven solutions.
            </Typography>
            
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Soft Skills</Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Team collaboration, time management, adaptability
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Contact Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocationOnIcon color="primary" />
                    <Typography>Hyderabad</Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <EmailIcon color="primary" />
                    <Typography>saipriyad28@gmail.com</Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <PhoneIcon color="primary" />
                    <Typography>7674838129</Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2, 
                    '&:hover': {
                      bgcolor: 'rgba(66, 133, 244, 0.05)',
                      cursor: 'pointer'
                    }
                  }}>
                    <LinkedInIcon color="primary" />
                    <Typography>LinkedIn</Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    '&:hover': {
                      bgcolor: 'rgba(66, 133, 244, 0.05)',
                      cursor: 'pointer'
                    }
                  }}>
                    <GitHubIcon color="primary" />
                    <Typography>GitHub</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
