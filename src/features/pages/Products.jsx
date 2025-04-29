import React from 'react';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavProducts from '../stayledComponents/NavProducts';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

const Products = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/images/navBarIm/300.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '30vh',
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
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <LocalFloristIcon sx={{ fontSize: 40, color: '#2e7d32', mr: 1 }} />
              <Typography variant="h3" component="h1" sx={{ color: '#2e7d32' }}>
                המוצרים שלנו
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ color: '#1b5e20' }}>
              מגוון רחב של צמחים ופרחים לכל גינה וחצר
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Navigation Categories */}
      <Box sx={{ py: 6, backgroundColor: '#f5f5f5', mb: 8 }}>
        <Container maxWidth="lg">
          <NavProducts />
        </Container>
      </Box>

      {/* Products Content */}
      <Container maxWidth="lg" sx={{ py: 8, mb: 8 }}>
        <Paper
          elevation={2}
          sx={{
            p: 4,
            borderRadius: 2,
            backgroundColor: '#ffffff',
            minHeight: '50vh'
          }}
        >
          <Outlet />
        </Paper>
      </Container>
    </Box>
  );
};

export default Products;
