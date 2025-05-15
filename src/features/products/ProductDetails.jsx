import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import  {useProductById} from "../Hooks/useProductByID";
import { Container, Typography, CircularProgress, Button } from "@mui/material";

import ProductCard from "./styledProducts/ProductCard";

//דף שמטפל בכל הלוגיקה של דיקה אם המוצר הנבחר נמצא, אם קיים- מציג אותו
//אם לא קיים מציג "מוצר לר קיים"
//הדף מטפל בכל השגיאות של מציאת מוצר.

  const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
  
    const { product, loading, notFound } = useProductById(productId);
  
    if (loading && !product) {
      return (
        <Container sx={{ textAlign: 'center', mt: 5 }}>
          <CircularProgress />
          <Typography variant="h6" color="primary" sx={{ mt: 1 }}>טוען נתונים...</Typography>
        </Container>
      );
    }
  
    if (!product && notFound) {
      return (
        <Container sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="h6" color="error">מוצר לא נמצא</Typography>
          <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mt: 2 }}>
            חזור אחורה
          </Button>
        </Container>
      );
    }
  
    return (
      <Container maxWidth={false} sx={{ mt: 5 }}>
               {product && <ProductCard product={product} onBack={() => navigate(-1)} />}
      </Container>
    );
  };
  
  export default ProductDetails;