import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Divider } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const About = () => {
  const features = [
    {
      icon: <LocalFloristIcon sx={{ fontSize: 40 }} />,
      title: 'מגוון רחב של צמחים',
      description: 'אנו מציעים מבחר עצום של צמחים ופרחים, מפרחי נוי ועד עצים בוגרים'
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: 'ייעוץ מקצועי',
      description: 'צוות המומחים שלנו מספק ייעוץ מקצועי לבחירת הצמחים המתאימים ביותר לגינה שלכם'
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'שירות משלוחים',
      description: 'אנו מספקים שירות משלוחים מהיר ואמין לכל רחבי הארץ'
    }
  ];

  const team = [
    {
      name: 'נועה כהן',
      role: 'מייסדת המשתלה',
      image: '/images/team/noa.jpg'
    },
    {
      name: 'דוד לוי',
      role: 'מומחה גינון',
      image: '/images/team/david.jpg'
    },
    {
      name: 'שרה אברהם',
      role: 'מעצבת גינות',
      image: '/images/team/sara.jpg'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/images/navBarIm/303.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: 'white',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1
            }}
          >
            אודות משתלת נועה
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Story Section */}
        <Paper elevation={3} sx={{ p: 4, mb: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#2e7d32', textAlign: 'center', mb: 4 }}>
            הסיפור שלנו
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', textAlign: 'center' }}>
            משתלת נועה נוסדה בשנת 1990 על ידי נועה כהן, חובבת גינון נלהבת.
            מה שהתחיל כמשתלה קטנה בחצר האחורית של הבית, הפך למשתלה מובילה בארץ.
            במשך השנים, המשתלה גדלה והתפתחה, אך השמירה על איכות השירות והמקצועיות נשארה בעדיפות עליונה.
          </Typography>
        </Paper>

        {/* Features Section */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#2e7d32', textAlign: 'center', mb: 6 }}>
          למה אנחנו?
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <Box sx={{ color: '#2e7d32', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Team Section */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#2e7d32', textAlign: 'center', mb: 6 }}>
          הצוות שלנו
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {team.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <Typography variant="h6" component="h3" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {member.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Contact Info Section */}
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#2e7d32', textAlign: 'center', mb: 4 }}>
            פרטי התקשרות
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ color: '#2e7d32', mr: 1 }} />
                <Typography>
                  רחוב הפרחים 123, תל אביב
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AccessTimeIcon sx={{ color: '#2e7d32', mr: 1 }} />
                <Typography>
                  א'-ה': 8:00-19:00, ו': 8:00-13:00
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmojiNatureIcon sx={{ color: '#2e7d32', mr: 1 }} />
                <Typography>
                  טל': 03-1234567
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
