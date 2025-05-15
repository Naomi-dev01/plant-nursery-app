import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ForestIcon from '@mui/icons-material/Forest';
import SpaIcon from '@mui/icons-material/Spa';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import LandscapeIcon from '@mui/icons-material/Landscape';
import { homeStyle } from '../../styles/homeStyle'; // Importing styles from homeStyle.js


const Home = () => {
  const navigate = useNavigate();

  //holds the categories in the plant nursery 
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
      {/* title Section */}
     <Box sx={homeStyle.heroSectionStyle}>
        <Container maxWidth="md">
          <Paper elevation={3} sx={homeStyle.paperStyle}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#2e7d32' }}>
              משתלת נועה
            </Typography>
            <Typography variant="h5" gutterBottom sx={homeStyle.heroSubtitle}>
              המקום שלכם לכל צמח ופרח
            </Typography>
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={() => navigate('/products')}//navigates to products
              sx={homeStyle.heroButton}
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
                sx={homeStyle.cardStyle}
                onClick={() => navigate(category.path)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.title}
                />
                <CardContent sx={homeStyle.cardContent}>
                  <Box sx={homeStyle.iconStyle}>
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
      <Box sx={homeStyle.aboutSection}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom sx={homeStyle.aboutTitle}>
            אודות המשתלה
          </Typography>
          <Typography variant="body1" paragraph sx={homeStyle.aboutText}>
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
