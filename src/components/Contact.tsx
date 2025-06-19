
import { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MuiAlert from '@mui/material/Alert';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

 const [formStatus, setFormStatus] = useState<{
  success: boolean;
  message: string;
} | null>({
  success: false,
  message: '',
});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating form submission
    setFormStatus({
      success: true,
      message: "Thank you for your message! I'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: '#f8fafc' }}>
      <Container maxWidth="md">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 1
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            Have a project in mind? Let's collaborate!
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          {formStatus && (
            <MuiAlert severity={formStatus.success ? 'success' : 'error'} sx={{ mb: 3 }}>
              {formStatus.message}
            </MuiAlert>
          )}

          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid component="div" sx={{ width: { xs: '100%', sm: '100%' } }}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>

              <Grid component="div" sx={{ width: { xs: '100%', sm: '100%' } }}>
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid component="div" sx={{ width: '100%' }}>
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>

              <Grid component="div" sx={{ width: '100%', textAlign: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  className="btn-gradient"
                  startIcon={<SendIcon />}
                  sx={{
                    borderRadius: '30px',
                    px: 4,
                    py: 1.5,
                    fontWeight: 600
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
