import { Box, Typography, Button, Container, Paper, TextField, Grid, IconButton } from '@mui/material';

/**
 * סגנונות עבור מיכל העגלה הראשי
 * מגדיר את הרוחב המקסימלי והמרווחים העליונים והתחתונים
 */
export const cartContainerStyles = {
  maxWidth: 'lg',
  mt: 8,
  mb: 8
};

/**
 * סגנונות עבור מיכל העגלה הראשי
 * מגדיר את הרוחב המקסימלי והמרווחים העליונים והתחתונים
 */
export const paperStyles = {
  elevation: 3,
  p: 3
};

/**
 * סגנונות עבור כל פריט בעגלה
 * מגדיר את המרווח התחתון, סידור אלמנטים בשורה ומרכז אנכי
 */
export const itemBoxStyles = {
  mb: 2,
  display: 'flex',
  alignItems: 'center'
};

/**
 * סגנונות עבור תמונות הפריטים בעגלה
 * מגדיר את גודל התמונה, מיקום, אנימציית מעבר ואפקט hover
 */
export const imageStyles = {
  width: 80,
  height: 80,
  objectFit: 'cover',
  mr: 2,
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    cursor: 'pointer'
  }
};

/**
 * סגנונות עבור מיכל הודעת ההצלחה
 * מגדיר את הרוחב המקסימלי והמרווחים העליונים והתחתונים
 */
export const successContainerStyles = {
  maxWidth: 'md',
  mt: 8,
  mb: 8
};

/**
 * סגנונות עבור רכיב הנייר של הודעת ההצלחה
 * מגדיר את הגובה, הריפוד הפנימי ומיקום הטקסט במרכז
 */
export const successPaperStyles = {
  elevation: 3,
  p: 4,
  textAlign: 'center'
};

/**
 * סגנונות עבור כפתור החזרה לקניות בהודעת ההצלחה
 * מגדיר את המרווחים, גודל הפונט, צל ואפקט hover
 */
export const successButtonStyles = {
  mt: 2,
  py: 1.5,
  px: 4,
  fontSize: '1.1rem',
  boxShadow: '0 4px 12px rgba(46, 125, 50, 0.2)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(46, 125, 50, 0.3)'
  }
};

/**
 * סגנונות עבור מיכל העגלה הריקה
 * מגדיר את הרוחב המקסימלי והמרווחים העליונים והתחתונים
 */
export const emptyCartContainerStyles = {
  maxWidth: 'md',
  mt: 8,
  mb: 8
};

/**
 * סגנונות עבור רכיב הנייר של העגלה הריקה
 * מגדיר את הגובה, הריפוד הפנימי ומיקום הטקסט במרכז
 */
export const emptyCartPaperStyles = {
  elevation: 3,
  p: 4,
  textAlign: 'center'
}; 