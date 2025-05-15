import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { otherPagesStyles } from '../../styles/otherPages';

// סכמת ולידציה עם Zod
const contactFormSchema = z.object({
  name: z.string().min(2, 'שם חייב להכיל לפחות 2 תווים'),
  email: z.string().email('כתובת אימייל לא תקינה'),
  phone: z.string().min(9, 'מספר טלפון חייב להכיל לפחות 9 ספרות'),
  message: z.string().min(10, 'הודעה חייבת להכיל לפחות 10 תווים')
});

const ContactUs = () => {
 
  
  const [showSuccess, setShowSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setShowSuccess(true);
    reset();
  };

  const handleCloseSnackbar = () => {
    setShowSuccess(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {/* מידע על החברה */}
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={0} 
            sx={otherPagesStyles.contactInfoPaper}
          >
            <Typography variant="h4" gutterBottom color="primary">
              צור קשר
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              אנחנו כאן כדי לעזור! צור איתנו קשר בכל שאלה או בקשה.
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocationOnIcon color="primary" />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">כתובת</Typography>
                <Typography variant="body2" color="text.secondary">
                  רחוב הפרחים 123, תל אביב
                </Typography>
              </Box>
            </Box>

            <Box sx={otherPagesStyles.contactIconBox}>
              <PhoneIcon color="primary" />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">טלפון</Typography>
                <Typography variant="body2" color="text.secondary">
                  03-1234567
                </Typography>
              </Box>
            </Box>

            <Box sx={otherPagesStyles.contactIconBox}>
              <EmailIcon color="primary" />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">אימייל</Typography>
                <Typography variant="body2" color="text.secondary">
                  info@flowershop.com
                </Typography>
              </Box>
            </Box>

            <Box sx={otherPagesStyles.contactIconBox}>
              <AccessTimeIcon color="primary" />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">שעות פעילות</Typography>
                <Typography variant="body2" color="text.secondary">
                  א'-ה': 09:00-18:00<br />
                  ו': 09:00-14:00
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* טופס יצירת קשר */}
        <Grid item xs={12} md={8}>
          <Paper 
            elevation={0} 
            sx={otherPagesStyles.contactFormPaper}
          >
            <Typography variant="h5" gutterBottom color="primary">
              שלח לנו הודעה
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              נשמח לעמוד לרשותך בכל שאלה או בקשה
            </Typography>

            {/*הטופס עצמו*/}
            <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '24px' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="שם מלא"
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    sx={otherPagesStyles.contactFormTextField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="אימייל"
                    type="email"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={otherPagesStyles.contactFormTextField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="טלפון"
                    {...register('phone')}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                    sx={otherPagesStyles.contactFormTextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="הודעה"
                    multiline
                    rows={4}
                    {...register('message')}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    sx={otherPagesStyles.contactFormTextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={otherPagesStyles.contactFormButton}
                  >
                    שלח
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar 
        open={showSuccess} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={otherPagesStyles.snackbarPosition}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={otherPagesStyles.contactFormAlert}
        >
          ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactUs;
