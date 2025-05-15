import React, { useState, useEffect } from 'react';
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
  Container
} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectProductQuantity } from '../../../redux/Slice/cartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartButton from '../../stayledComponents/CartButton';
import { useNavigate } from 'react-router-dom';
import { productsStyles } from '../../../styles/productsStyle';

/**
 * קומפוננטת ProductCard - מציגה את פרטי המוצר ומאפשרת הוספה לעגלה
 * @param {Object} product - אובייקט המוצר להצגה
 * @param {Function} onBack - פונקציה לחזרה לדף הקודם
 */
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartQuantity = useSelector(selectProductQuantity(product.id));
  const [quantity, setQuantity] = useState(cartQuantity);
  const [showSuccess, setShowSuccess] = useState(false);

  /**
   * useEffect - מעדכן את הכמות המקומית כשהכמות בעגלה משתנה
   * @param {number} cartQuantity - הכמות הנוכחית של המוצר בעגלה
   */
  useEffect(() => {
    setQuantity(cartQuantity);
  }, [cartQuantity]);

  /**
   * מטפלת בשינוי הכמות של המוצר
   * @param {number} change - השינוי בכמות (1 או -1)
   */
  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  /**
   * מטפלת בהוספת המוצר לעגלה
   * 1. שולחת את המוצר והכמות ל-Redux store
   * 2. מציגה הודעת הצלחה
   */
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setShowSuccess(true);
  };

  /**
   * מטפלת בסגירת הודעת ההצלחה
   */
  const handleCloseSnackbar = () => {
    setShowSuccess(false);
  };

  /**
   * מציגה את פרטי המוצר בהתאם לקטגוריה שלו
   * @returns {JSX.Element} - רכיב JSX עם פרטי המוצר
   */
  const renderProductDetails = () => {
    switch (product.categoryName) {
      case "flowers":
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom sx={productsStyles.productTitle}>
                {product.name}
              </Typography>
              <Typography variant="h5" color="primary" sx={productsStyles.productPrice}>
                ₪{product.cost}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={productsStyles.productLabel}>קטגוריה:</Typography>
              <Typography variant="body1">{product.category}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={productsStyles.productLabel}>צבעים:</Typography>
              <Typography variant="body1">{product.colors}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={productsStyles.productLabel}>גובה:</Typography>
              <Typography variant="body1">{product.height}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={productsStyles.productLabel}>תנאי גידול:</Typography>
              <Typography variant="body1">{product.growingConditions}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={productsStyles.productLabel}>טיפול:</Typography>
              <Typography variant="body1">{product.care}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={productsStyles.productLabel}>שימושים עיקריים:</Typography>
              <Typography variant="body1">{product.mainUses}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={productsStyles.productLabel}>תכונות מיוחדות:</Typography>
              <Typography variant="body1">{product.specialFeatures}</Typography>
            </Grid>
          </Grid>
        );
      case "trees":
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom sx={productsStyles.productTitle}>
                {product.name}
              </Typography>
              <Typography variant="h5" color="primary" sx={productsStyles.productPrice}>
                ₪{product.cost}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={productsStyles.productLabel}>קטגוריה:</Typography>
              <Typography variant="body1">{product.category}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={productsStyles.productLabel}>גובה:</Typography>
              <Typography variant="body1">{product.height}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={productsStyles.productLabel}>תנאי גידול:</Typography>
              <Typography variant="body1">{product.growingConditions}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={productsStyles.productLabel}>טיפול:</Typography>
              <Typography variant="body1">{product.care}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" sx={productsStyles.productLabel}>שימוש עיקרי:</Typography>
              <Typography variant="body1">{product.mainUse}</Typography>
            </Grid>
          </Grid>
        );
      default:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom sx={productsStyles.productTitle}>
                {product.name}
              </Typography>
              <Typography variant="h5" color="primary" sx={productsStyles.productPrice}>
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
      <Box sx={productsStyles.productCardContainer}>
        <Paper elevation={0} sx={productsStyles.productCardPaper}>
          <Grid container spacing={6}>
            {/* תמונת המוצר - צד ימין */}
            <Grid item xs={12} md={6}>
              <Box sx={productsStyles.productImageBox}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={productsStyles.productImage}
                />
              </Box>
            </Grid>

            {/* פרטי המוצר - צד שמאל */}
            <Grid item xs={12} md={6}>
              <Box sx={productsStyles.productDetailsBox}>
                {renderProductDetails()}
                
                {/* כפתורי שליטה בכמות */}
                <Box sx={productsStyles.quantityControlBox}>
                  <IconButton 
                    size="large" 
                    onClick={() => handleQuantityChange(-1)}
                    color="primary"
                    sx={productsStyles.quantityButton}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography variant="h5" sx={productsStyles.quantityText}>
                    {quantity}
                  </Typography>
                  <IconButton 
                    size="large" 
                    onClick={() => handleQuantityChange(1)}
                    color="primary"
                    sx={productsStyles.quantityButton}
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
                  sx={productsStyles.addToCartButton}
                >
                  הוסף לעגלה
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Button variant="outlined" onClick={() => navigate(-1)} sx={productsStyles.backButton}>
        חזור אחורה
      </Button>
      <Snackbar 
        open={showSuccess} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={productsStyles.successAlert}
        >
          המוצר נוסף לעגלה בהצלחה!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;