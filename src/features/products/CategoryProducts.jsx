import React, { useEffect } from 'react'
import { getAllData } from '../../api/apiCalls'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ProductsList from './ProductsList'
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading , setProducts } from '../../redux/Slice/productSlice'
import NavProducts from '../stayledComponents/NavProducts'




//הקומפוננטה מסננת את המוצרים שנבחרו לפי הקטגוריה הניווט. 
// המוצרים המסוננים נשלחים לקומפוננטת LIST שמציגה את כל הצורים בצורה מעוצבת.
const CategoryProducts = () => {

  const dispatch = useDispatch()

  
  const loading = useSelector((state) => state.product.isLoading)
  const data = useSelector((state) => state.product.products)

  
  const { category } = useParams();

  //קראית API להצגת כל הנתונים המבוקשים עפ קטגוריה נבחרת
  const fetchingProducts = async () => {
    try {
      dispatch(setIsLoading(true));
      const allProducts = await getAllData();
      
      console.log("All Products:", allProducts);
      console.log("Category:", category);

      // קבלת הנתונים מהקטגוריה המבוקשת
      const filteredProducts = allProducts[category];

      console.log("Filtered Products:", filteredProducts);

      // אם הקטגוריה היא gardenDesign, מציגים את כל המוצרים ללא תלות במלאי
      const availableProducts = category === 'gardenDesign' 
        ? filteredProducts 
        : filteredProducts.filter(product => 
            product.stock && product.stock > 0
          );

      //console.log("Available Products:", availableProducts);
      
      if(availableProducts && availableProducts.length > 0) {
        dispatch(setProducts(availableProducts));
      } else {
        //console.log("No products available in stock for this category.");
        dispatch(setProducts([]));
      }
      
    } catch (error) {
      console.error("Failed to fetch products:", error.message);
      dispatch(setProducts([]));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
  //מציג את כל המוצרים, ורק כאשר הקטגוריה משתנה,
  //  יטענו הנתונים מחדש ויוצגו שוב הנתונים הדרושים.
  useEffect(() => {
    fetchingProducts()
  }, [category])

  return (
    <div>
      <NavProducts />
      <ProductsList loading={loading} data={data}/>
    </div>
  )
}

export default CategoryProducts
