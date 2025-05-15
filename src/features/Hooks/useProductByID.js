import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../api/apiCalls";
import { setProducts, setIsLoading } from "../../redux/Slice/productSlice";

export const useProductById = (productId) => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.isLoading);

  useEffect(() => {
    let didCancel = false;
    setNotFound(false); // אפס את notFound בכל שינוי של productId
    setProduct(null);   // אפס מוצר קודם

    const fetchProduct = async () => {
      let found = products.find(
        (p) => String(p.id) === String(productId) && p.categoryName
      );

      if (found) {
        if (!didCancel) setProduct(found);
        return;
      }

      if (!loading && !isFetching) {
        setIsFetching(true);
        dispatch(setIsLoading(true));

        try {
          const allProductsData = await getAllData();
          let allAvailableProducts = [];

          Object.entries(allProductsData).forEach(([categoryName, items]) => {
            const categorizedItems = items.map((item) => ({
              ...item,
              categoryName,
            }));
            allAvailableProducts.push(...categorizedItems);
          });

          dispatch(setProducts(allAvailableProducts));

          found = allAvailableProducts.find(
            (p) => String(p.id) === String(productId)
          );

          if (found) {
            if (!didCancel) setProduct(found);
          } else {
            if (!didCancel) setNotFound(true);
          }
        } catch (err) {
          console.error("Error fetching product data:", err);
          dispatch(setProducts([]));
          if (!didCancel) setNotFound(true);
        } finally {
          setIsFetching(false);
          dispatch(setIsLoading(false));
        }
      }
    };

    fetchProduct();

    return () => {
      didCancel = true;
    };
  }, [productId]);

  return {
    product,
    loading: loading || isFetching,
    notFound,
  };
};