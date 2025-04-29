import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
  Fab, 
  Badge, 
  Box,
  Tooltip
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { selectCartItems } from '../../redux/Slice/cartSlice';

const CartButton = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const itemCount = cartItems ? cartItems.length : 0;

  if (itemCount === 0) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        left: 16,
        bottom: 16,
        zIndex: 1000
      }}
    >
      <Tooltip title="עגלת קניות">
        <Fab 
          color="primary" 
          onClick={() => navigate('/cart')}
          sx={{
            boxShadow: 3,
            '&:hover': {
              transform: 'scale(1.1)',
              transition: 'transform 0.2s'
            }
          }}
        >
          <Badge badgeContent={itemCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default CartButton; 