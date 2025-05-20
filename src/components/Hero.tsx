
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Hero() {
  return (
    <Box 
      id="home" 
      sx={{
        py: { xs: 8, md: 12 },
        backgroundImage: 'radial-gradient(circle at 30% 80%, rgba(66, 133, 244, 0.05) 0%, transparent 40%), radial-gradient(circle at 70% 20%, rgba(155, 93, 229, 0.05) 0%, transparent 35%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              Full Stack Developer
            </Typography>
            
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Saipriya Doddi
            </Typography>
            
            <Typography 
              variant="h4" 
              component="div" 
              className="gradient-text"
              sx={{ 
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                lineHeight: 1.3,
              }}
            >
              Crafting elegant software solutions.
            </Typography>
            
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                mb: 4,
                maxWidth: '600px',
                mx: { xs: 'auto', md: 0 },
                fontSize: '1.05rem',
                lineHeight: 1.7
              }}
            >
              Full Stack Developer with 2 years of experience, skilled in Spring Boot, ReactJS, and PostgreSQL. 
              Focused on building efficient web applications, solving complex software challenges, and continuously 
              expanding technical expertise while contributing to impactful team-driven solutions.
            </Typography>
            
            <Stack 
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 2, sm: 3 }}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <Button 
                variant="contained" 
                size="large"
                className="btn-gradient"
                href="#projects"
                startIcon={<VisibilityIcon />}
                sx={{ 
                  borderRadius: '30px', 
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  boxShadow: 2
                }}
              >
                View Projects
              </Button>
              
              <Button 
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                className="btn-outline"
                sx={{ 
                  borderRadius: '30px', 
                  px: 4,
                  py: 1.5,
                  fontWeight: 600
                }}
              >
                Download Resume
              </Button>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box 
              sx={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                bgcolor: 'rgba(66, 133, 244, 0.08)',
                mx: 'auto',
                position: 'relative',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
