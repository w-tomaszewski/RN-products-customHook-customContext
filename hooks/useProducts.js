import { useEffect, useState } from 'react';
import { getProducts, createProduct } from '../services/api/fakeApi';

const useProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setProducts(await getProducts());
    };

    fetchData();
  }, []);

  const addNewProduct = async (product) => {
    const newProductReponseJson = createProduct(product);
    setProducts(prevState => {
      return [...prevState, ...[{ ...product, id: newProductReponseJson.id }]];
    });
  }

  return { products, addNewProduct };
};

export default useProducts;