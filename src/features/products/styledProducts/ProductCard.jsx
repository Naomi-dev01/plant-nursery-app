import React, { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Divider, 
  Paper, 
  Snackbar, 
  Alert,
  Grid,
  Container,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/Slice/cartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartButton from '../../stayledComponents/CartButton';

const ProductCard = ({ product, onBack }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setShowSuccess(true);
  };

  const handleCloseSnackbar = () => {
    setShowSuccess(false);
  };

  const renderProductDetails = () => {
    switch (product.categoryName) {
      case "flowers":
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                {product.name}
              </Typography>
              <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', textAlign: 'right', mb: 3 }}>
                ₪{product.cost}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>קטגוריה:</Typography>
              <Typography variant="body1">{product.category}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>צבעים:</Typography>
              <Typography variant="body1">{product.colors}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>גובה:</Typography>
              <Typography variant="body1">{product.height}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>תנאי גידול:</Typography>
              <Typography variant="body1">{product.growingConditions}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>טיפול:</Typography>
              <Typography variant="body1">{product.care}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>שימושים עיקריים:</Typography>
              <Typography variant="body1">{product.mainUses}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>תכונות מיוחדות:</Typography>
              <Typography variant="body1">{product.specialFeatures}</Typography>
            </Grid>
          </Grid>
        );
      case "trees":
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                {product.name}
              </Typography>
              <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', textAlign: 'right', mb: 3 }}>
                ₪{product.cost}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>קטגוריה:</Typography>
              <Typography variant="body1">{product.category}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>גובה:</Typography>
              <Typography variant="body1">{product.height}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>תנאי גידול:</Typography>
              <Typography variant="body1">{product.growingConditions}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>טיפול:</Typography>
              <Typography variant="body1">{product.care}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>שימוש עיקרי:</Typography>
              <Typography variant="body1">{product.mainUse}</Typography>
            </Grid>
          </Grid>
        );
      default:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                {product.name}
              </Typography>
              <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', textAlign: 'right', mb: 3 }}>
                ₪{product.cost}
              </Typography>
            </Grid>
                     </Grid>
        );
    }
  };

  return (
    <>
      <CartButton />
      <Box sx={{ 
        width: '100%', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        py: 6,
        px: 2,
        bgcolor: 'grey.50'
      }}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: { xs: 3, md: 6 }, 
            borderRadius: 4,
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            bgcolor: 'white',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          }}
        >
          <Grid container spacing={6}>
            {/* תמונת המוצר - צד ימין */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '350px', md: '500px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 3,
                  overflow: 'hidden',
                  bgcolor: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 3,
                    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    p: 2
                  }}
                />
              </Box>
            </Grid>

            {/* פרטי המוצר - צד שמאל */}
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                gap: 4
              }}>
                {renderProductDetails()}
                
                {/* כפתורי שליטה בכמות */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'flex-start',
                  gap: 2,
                  py: 2
                }}>
                  <IconButton 
                    size="large" 
                    onClick={() => handleQuantityChange(-1)}
                    color="primary"
                    sx={{ 
                      backgroundColor: 'rgba(46, 125, 50, 0.1)',
                      width: 48,
                      height: 48,
                      '&:hover': {
                        backgroundColor: 'rgba(46, 125, 50, 0.2)'
                      }
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      minWidth: 60, 
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'primary.main'
                    }}
                  >
                    {quantity}
                  </Typography>
                  <IconButton 
                    size="large" 
                    onClick={() => handleQuantityChange(1)}
                    color="primary"
                    sx={{ 
                      backgroundColor: 'rgba(46, 125, 50, 0.1)',
                      width: 48,
                      height: 48,
                      '&:hover': {
                        backgroundColor: 'rgba(46, 125, 50, 0.2)'
                      }
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>

                {/* כפתור הוספה לעגלה */}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<ShoppingCartIcon />}
                  onClick={handleAddToCart}
                  sx={{
                    py: 2,
                    px: 6,
                    borderRadius: 3,
                    textTransform: 'none',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(46, 125, 50, 0.2)',
                    alignSelf: 'flex-start',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(46, 125, 50, 0.3)'
                    }
                  }}
                >
                  הוסף לעגלה
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Snackbar 
        open={showSuccess} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ 
            width: '100%',
            borderRadius: 2,
            boxShadow: '0 4px 12px rgba(46, 125, 50, 0.2)'
          }}
        >
          המוצר נוסף לעגלה בהצלחה!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;