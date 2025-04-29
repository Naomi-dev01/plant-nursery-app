import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, CircularProgress, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CartButton from '../stayledComponents/CartButton';

const ProductsList = ({ loading, data }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Typography variant="h6" color="text.secondary">
          לא נמצאו מוצרים בקטגוריה זו
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <CartButton />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {data.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                    cursor: 'pointer'
                  }
                }}
                onClick={() => navigate(`/products/details/${product.id}`)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: '1px solid',
                    borderColor: 'divider'
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                  <Typography 
                    variant="h6" 
                    component="h2" 
                    gutterBottom
                    sx={{ 
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textAlign: 'right'
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      textAlign: 'right',
                      mb: 1
                    }}
                  >
                    {product.category}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="primary"
                    sx={{ 
                      fontWeight: 600,
                      textAlign: 'right'
                    }}
                  >
                    ₪{product.cost}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductsList;