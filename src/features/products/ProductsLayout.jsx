import React from 'react'
import { Outlet, useLocation } from 'react-router'
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import NavProducts from '../stayledComponents/NavProducts'

//מציגה את הניתוב ושומרת המקןם בעזרת אאוטלט לשאר התוכן הרצוי.
const ProductsLayout = () => {
    const location = useLocation();
    const path = location.pathname;

    // תנאים לזיהוי באיזה דף אנחנו
    const isMainProductsPage = path === '/products';//יציג את נתוב המוצרים רק בדפי מוצרים ראשיים
    const isProductDetailsPage = path.startsWith('/products/details');//ולא יציג את הניתוב בדף פרטי מוצר ספציפי
  
    return (
      <div>
        {/* הצגת ניווט רק אם זה לא דף פרטי מוצר */}
        {!isProductDetailsPage && (
          isMainProductsPage ? (
            <>
              <Outlet />
              <NavProducts />
              <Box sx={{ py: 1, backgroundColor: '#f5f5f5', mb: 1 }}>
                      <Container maxWidth="lg">
                        {/*מציג את דף ניווט המוצרים */}
                      
                         </Container>
                    </Box>
            </>
          ) : (
            <>
              <Box sx={{ py: 2, backgroundColor: '#f5f5f5' }}>
                <Container maxWidth="lg">
                  <NavProducts />
                </Container>
              </Box>
              <Outlet />
            </>
          )
        )}
  
        {/* הצגת תוכן פנימי תמיד */}
        {isProductDetailsPage && <Outlet />}
    </div>
  )
}

export default ProductsLayout
