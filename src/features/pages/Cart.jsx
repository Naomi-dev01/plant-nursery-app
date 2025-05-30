import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Box,  Typography,  Button,   Container, 
  Paper,
  TextField,
  Grid,
   IconButton,
 } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromCart, clearCart, updateQuantity } from '../../redux/Slice/cartSlice';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  cartContainerStyles,
  paperStyles,
  itemBoxStyles,
  imageStyles,
  successContainerStyles,
  successPaperStyles,
  successButtonStyles,
  emptyCartContainerStyles,
  emptyCartPaperStyles
} from '../../styles/cartStyles';

// סכמת ולידציה עם Zod
//קביעת הסכמה, מה השדות השגיאות והמגבלות
const orderFormSchema = z.object({
  name: z.string().min(2, 'שם מלא חייב להכיל לפחות 2 תווים'),
  phone: z.string().min(9, 'מספר טלפון חייב להכיל לפחות 9 ספרות'),
  email: z.string().email('כתובת אימייל לא תקינה'),
  address: z.string().min(2, 'כתובת חייבת להכיל לפחות 2 תווים'),
  city: z.string().min(2, 'עיר חייבת להכיל לפחות 2 תווים'),
  zipCode: z.string().min(5, 'מיקוד חייב להכיל לפחות 5 ספרות'),
  cardNumber: z.string().min(16, 'מספר כרטיס חייב להכיל 16 ספרות'),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'תוקף לא תקין'),
  cvv: z.string().min(3, 'קוד CVV חייב להכיל 3 ספרות')
});

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //holds the selected products by going to cartSlice that holds the items.
  const cartItems = useSelector((state) => state.cart.items);
  const [showSuccess, setShowSuccess] = useState(false);
   const [showContinueButton, setShowContinueButton] = useState(false);
  
  //מטפל בשדות הטופס ולדווא בדיקת תקינות של הלקטים
  //מכיל אוביקטים לכל אוביקט תפקיד לשימוש בטופס.
  //the register conects the form to the hook form
  const {
    register,
    handleSubmit,
    formState: { errors },//contains all the errors
    reset
  } = useForm({
    resolver: zodResolver(orderFormSchema)//connects the hook form to zod
  });
  //orderFormSchema is the object which holds את השדות בטופס, מה חובה להכניס ומה המגבלות ואילו הודעות שגיאה להציג.

  /**
   * מטפלת בשליחת הטופס:
   * 1. מונעת את התנהגות ברירת המחדל של הטופס
   * 2. מדפיסה את פרטי ההזמנה ללוג
   * 3. מנקה את העגלה
   * 4. מאפסת את הטופס
   * 5. מציגה הודעת הצלחה
   * 6. מציגה כפתור חזרה לקניות
   */
  const onSubmit = (data, event) => {
    event.preventDefault(); // מונע את התנהגות ברירת המחדל של הטופס
    console.log('Order submitted:', { items: cartItems, customerDetails: data });
    dispatch(clearCart());
    reset();
    setShowSuccess(true);
    setShowContinueButton(true);
  };


  /**
   * מחשבת את הסכום הכולל של ההזמנה:
   * 1. עוברת על כל הפריטים בעגלה
   * 2. מכפילה את המחיר של כל פריט בכמות שלו
   * 3. מסכמת את כל התוצאות
   */
  const calculateTotal = () => {
    return Object.values(cartItems).reduce((total, item) => total + (item.cost * item.quantity), 0);
  };

  /**
   * מעדכנת את כמות הפריט בעגלה:
   * 1. בודקת שהכמות החדשה לא קטנה מ-1
   * 2. מעדכנת את הכמות ב-Redux store
   */
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
  };

  /**
   * מסירה פריט מהעגלה:
   * 1. מעבירה את מזהה הפריט לפונקציית ה-Remove ב-Redux
   */
  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  if (showSuccess) {
    return (
      <Container sx={successContainerStyles}>
        <Paper sx={successPaperStyles}>
          <Typography variant="h5" gutterBottom sx={{ color: '#4caf50', fontWeight: 'bold' }}>
            ההזמנה נקלטה בהצלחה!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            ניצור איתך קשר בהקדם
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate('/')}
            sx={successButtonStyles}
          >
            לדף הבית
                      </Button>
        </Paper>
      </Container>
    );
  }

  if (Object.keys(cartItems).length === 0) {
    return (
      <Container sx={emptyCartContainerStyles}>
        <Paper sx={emptyCartPaperStyles}>
          <Typography variant="h5" gutterBottom>
            העגלה ריקה
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate('/products')}
            sx={{ mt: 2 }}
          >
            המשך לקנייה
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container sx={cartContainerStyles}>
      <Grid container spacing={4}>
        {/* פרטי הזמנה */}
        <Grid item xs={12} md={8}>
          <Paper sx={paperStyles}>
            <Typography variant="h5" gutterBottom>
              פרטי הזמנה
            </Typography>
            {Object.values(cartItems).map((item) => (
              <Box key={item.id} sx={itemBoxStyles}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={imageStyles}
                  onClick={() => navigate(`/products/details/${item.id}`)}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/products/details/${item.id}`)}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₪{item.cost} x {item.quantity}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Button
                    size="small"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <Typography>{item.quantity}</Typography>
                  <Button
                    size="small"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                  <IconButton 
                    color="error" 
                    onClick={() => handleRemoveItem(item.id)}
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* טופס תשלום */}
        <Grid item xs={12} md={4}>
          <Paper sx={paperStyles}>
            <Typography variant="h5" gutterBottom>
              פרטי תשלום
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="שם מלא"
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="טלפון"
                    {...register('phone')}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="אימייל"
                    type="email"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="כתובת"
                    {...register('address')}
                    error={!!errors.address}
                    helperText={errors.address?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="עיר"
                    {...register('city')}
                    error={!!errors.city}
                    helperText={errors.city?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="מיקוד"
                    {...register('zipCode')}
                    error={!!errors.zipCode}
                    helperText={errors.zipCode?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="מספר כרטיס אשראי"
                    {...register('cardNumber')}
                    error={!!errors.cardNumber}
                    helperText={errors.cardNumber?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="תוקף כרטיס (MM/YY)"
                    {...register('expiryDate')}
                    error={!!errors.expiryDate}
                    helperText={errors.expiryDate?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="CVV"
                    {...register('cvv')}
                    error={!!errors.cvv}
                    helperText={errors.cvv?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    סה"כ לתשלום: ₪{calculateTotal()}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                  >
                    שלח הזמנה
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;