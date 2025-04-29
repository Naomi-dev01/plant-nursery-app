import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ForestIcon from '@mui/icons-material/Forest';
import SpaIcon from '@mui/icons-material/Spa';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import LandscapeIcon from '@mui/icons-material/Landscape';

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'פרחים',
      description: 'מגוון רחב של פרחים צבעוניים ומיוחדים',
      image: '/images/navBarIm/300.jpg',
      icon: <LocalFloristIcon sx={{ fontSize: 40 }} />,
      path: '/products/flowers'
    },
    {
      title: 'עצים',
      description: 'עצים וצמחים גדולים לגינה ולחצר',
      image: '/images/navBarIm/303.jpg',
      icon: <ForestIcon sx={{ fontSize: 40 }} />,
      path: '/products/trees'
    },
    {
      title: 'תכנון גינות',
      description: 'שירותי תכנון גינות מקצועיים',
      image: '/images/navBarIm/1.jpg',
      icon: <LandscapeIcon sx={{ fontSize: 40 }} />,
      path: '/products/gardenDesign'
    },
    {
      title: 'מוצרים נלווים',
      description: 'כלי גינון, אדמה, דשנים ועוד',
      image: '/images/navBarIm/301.jpg',
      icon: <SpaIcon sx={{ fontSize: 40 }} />,
      path: '/products/moreStuff'
    },
    {
      title: 'זרים ומתנות',
      description: 'זרים מעוצבים ומתנות מיוחדות',
      image: '/images/navBarIm/304.jpg',
      icon: <EmojiNatureIcon sx={{ fontSize: 40 }} />,
      path: '/products/bouquets'
    },
    
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/images/navBarIm/300.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
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
          <Paper
            elevation={3}
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 2
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#2e7d32' }}>
              משתלת נועה
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ color: '#1b5e20' }}>
              המקום שלכם לכל צמח ופרח
            </Typography>
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={() => navigate('/products')}
              sx={{ mt: 2 }}
            >
              צפה במוצרים שלנו
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6, color: '#2e7d32' }}>
          קטגוריות מוצרים
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    cursor: 'pointer'
                  }
                }}
                onClick={() => navigate(category.path)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.title}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ color: '#2e7d32', mb: 1 }}>
                    {category.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4, color: '#2e7d32' }}>
            אודות המשתלה
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: 'center', fontSize: '1.1rem' }}>
            משתלת נועה היא משתלה משפחתית ותיקה המספקת שירות מקצועי ואיכותי ללקוחותיה.
            אנו מתמחים בגידול והפצת צמחים ופרחים, ומציעים מגוון רחב של מוצרים איכותיים.
            הצוות המקצועי שלנו ישמח לעזור לכם בבחירת הצמחים המתאימים ביותר לגינה שלכם.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
