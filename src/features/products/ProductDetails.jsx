import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, CircularProgress, Box, Button } from "@mui/material";
import { getAllData } from "../../api/apiCalls";
import { setProducts, setIsLoading } from "../../redux/Slice/productSlice";
import ProductCard from "./styledProducts/ProductCard";

const ProductDetails = () => {
  const { productId } = useParams(); // מזהה המוצר מה-URL
  const navigate = useNavigate(); // פונקציה לניווט
  const dispatch = useDispatch(); // פונקציה לשליחת אקשנים ל-Redux

  // --- שימוש בשמות המשתנים שלך מה-Redux state ---
  const products = useSelector((state) => state.product.products); // מערך המוצרים מ-Redux
  const loading = useSelector((state) => state.product.isLoading); // מצב טעינה גלובלי מ-Redux
  // --------------------------------------------------

  const [product, setProduct] = useState(null); // State מקומי למוצר הנבחר
  const [isFetching, setIsFetching] = useState(false); // State מקומי למעקב אחר טעינה ספציפית לדף זה

  // --- קראיתAPI המחזירה את הערכים הרצויים ומסוננים ---
  const fetchProducts = async () => {
    setIsFetching(true); // התחל טעינה מקומית
    dispatch(setIsLoading(true)); // התחל טעינה גלובלית
    let allAvailableProducts = []; // 
        try {
      const allProductsData = await getAllData(); // ייבוא כל הנתונים

      // עבור על כל הקטגוריות (המערכים) והוסף לכל מוצר את שם הקטגוריה (שם המערך)
      Object.entries(allProductsData).forEach(([categoryName, items]) => {
        const categorizedItems = items.map((item) => ({
          ...item,
          categoryName, // הוספת שם הקטגוריה לכל אובייקט
        }));

        // הוספת הפריטים המעובדים למערך הכללי
        allAvailableProducts = [...allAvailableProducts, ...categorizedItems];
      });

      dispatch(setProducts(allAvailableProducts)); // עדכון ב-Redux
      // --- הוספנו החזרת ערך ---
      return allAvailableProducts; // החזרת המוצרים המעובדים לשימוש ב-useEffect
      // --------------------------
    } catch (error) {
      console.error("Error loading products:", error);
      dispatch(setProducts([])); // איפוס המוצרים ב-Redux במקרה של שגיאה
      return []; // תחזיר מערך ריק במקרה של שגיאה
    } finally {
      setIsFetching(false); // סיים טעינה מקומית
      dispatch(setIsLoading(false)); // סיים טעינה גלובלית
    }
  };
  // --------------------------------------------------

  useEffect(() => {
    let didCancel = false; // משתנה למניעת עדכוני state לאחר unmount

    const findProduct = async () => {
      setProduct(null); // אפס את המוצר הנוכחי לפני חיפוש חדש

      // 1. נסה למצוא את המוצר בנתונים שכבר קיימים ב-Redux (משתמש במשתנה 'products')
      let found = products.find(
        (p) => String(p.id) === String(productId) && p.categoryName // ודא שיש categoryName
      );

      // 2. אם המוצר נמצא ב-Redux ויש לו categoryName, השתמש בו
      if (found) {
        if (!didCancel) {
          setProduct(found);
        }
        return; // סיימנו, אין צורך להמשיך
      }

      // 3. אם המוצר לא נמצא ב-Redux (או שאין לו categoryName), טען את כל הנתונים
      // בדוק אם כבר בתהליך טעינה כדי למנוע קריאות כפולות (משתמש במשתנה 'loading')
      if (!loading && !isFetching) {
        // --- קריאה לפונקציה שלך 'fetchProducts' ---
        const processedData = await fetchProducts(); // קבלת הנתונים המעובדים מהפונקציה
        // -------------------------------------------
        if (didCancel) return; // בדוק שוב לפני עדכון state

        // נסה למצוא את המוצר שוב בתוך הנתונים החדשים שנטענו
        found = processedData.find(
          (p) => String(p.id) === String(productId)
        );

        if (found) {
          if (!didCancel) {
            setProduct(found); // מצאנו את המוצר אחרי הטעינה
          }
        } else {
          // אם גם אחרי טעינת כל הנתונים המוצר לא נמצא
          if (!didCancel) {
             console.error(`Product with ID ${productId} not found after fetching all data.`);
             // כאן לא מעדכנים את product, הוא יישאר null
          }
        }
      }
    };

    findProduct();

    // Cleanup function: תרוץ כאשר הקומפוננטה יורדת מהמסך או לפני הרצה הבאה של ה-effect
    return () => {
      didCancel = true;
    };

    // --- עדכון התלויות לשימוש במשתנים הנכונים ---
  }, [productId, products, dispatch, loading, isFetching]);
  // -----------------------------------------------

  // ---- לוגיקת תצוגת טעינה ושגיאה משופרת ----
  // הצג טעינה אם הדף במצב טעינה (מקומי או גלובלי) ועדיין אין מוצר
  if ((loading || isFetching) && !product) {
    return (
      <Container sx={{ textAlign: 'center', mt: 5 }}>
        <CircularProgress />
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>טוען נתונים...</Typography>
      </Container>
    );
  }

  // אם אין מוצר וסיימנו לטעון (גם מקומית וגם גלובלית), כנראה שהמוצר לא נמצא
  if (!product && !loading && !isFetching) {
    return (
      <Container sx={{ textAlign: 'center', mt: 5 }}>
         <Typography variant="h6" color="error">מוצר לא נמצא</Typography>
         <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mt: 2 }}>
            חזור אחורה
         </Button>
      </Container>
     );
  }
  // -------------------------------------------

  // אם יש מוצר, הצג את כרטיס המוצר
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      
      {/* ודא ש-product אינו null לפני העברתו */}
      {product && <ProductCard product={product} onBack={() => navigate(-1)} />}
    </Container>
  );
};

export default ProductDetails;