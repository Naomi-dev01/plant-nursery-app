import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { productsStyles } from '../../styles/productsStyle';

const Products = () => {
  return (
    <>
      <Box sx={productsStyles.mainBox}>
        {/* Hero Section */}
        <Box sx={productsStyles.heroBox}>
          <Container maxWidth="md">
            <Paper elevation={3} sx={productsStyles.paper}>
              <Box sx={productsStyles.titleBox}>
                <LocalFloristIcon sx={productsStyles.icon} />
                <Typography variant="h3" component="h1" sx={productsStyles.title}>
                  המוצרים שלנו
                </Typography>
              </Box>
              <Typography variant="h6" sx={productsStyles.subtitle}>
                מגוון רחב של צמחים ופרחים לכל גינה וחצר
              </Typography>
            </Paper>
          </Container>
        </Box>

        {/* Navigation Categories */}
        <Box sx={productsStyles.navBox}>
          <Container maxWidth="lg">
            {/*מציג את דף ניווט המוצרים */}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Products;
