import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Badge,
 
} from "@mui/material";
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/Slice/cartSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  
  // שימוש ב-selector עם טרנספורמציה
  const cartItems = useSelector(selectCartItems);
  const itemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            color: 'primary.main',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          onClick={() => navigate('/')}//navigates to hompage
        >
          משתלת נועה
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="primary" 
            onClick={() => navigate('/')}//navigates to hompage
            sx={{ 
              '&:hover': { 
                backgroundColor: 'rgba(46, 125, 50, 0.1)' 
              } 
            }}
          >
            דף הבית
          </Button>
          <Button 
            color="primary" 
            onClick={() => navigate('/products')}//navigates to products
            sx={{ 
              '&:hover': { 
                backgroundColor: 'rgba(46, 125, 50, 0.1)' 
              } 
            }}
          >
            מוצרים
          </Button>
          <Button 
            color="primary" 
            onClick={() => navigate('/about')}// nav to about
            sx={{ 
              '&:hover': { 
                backgroundColor: 'rgba(46, 125, 50, 0.1)' 
              } 
            }}
          >
            אודות
          </Button>
          <Button 
            color="primary" 
            onClick={() => navigate('/contactUs')}//nav to contact Us
            sx={{ 
              '&:hover': { 
                backgroundColor: 'rgba(46, 125, 50, 0.1)' 
              } 
            }}
          >
            צור קשר
          </Button>
          <IconButton 
            color="primary" 
            onClick={() => navigate('/cart')}//nav to cart
            sx={{ 
              '&:hover': { 
                backgroundColor: 'rgba(46, 125, 50, 0.1)' 
              } 
            }}
          >
            {/*cart icon including dinamic amount of products*/}
            <Badge badgeContent={itemCount} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
