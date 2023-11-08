import { createContext, useState, useEffect } from "react";
import { getProducts, createProduct } from "../../services/api/fakeApi";

export const ProductContext = createContext({
  products: [],
  addNewProduct: async (product) => {},
});

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setProducts(await getProducts());
    };

    fetchData();
  }, []);

  const addNewProduct = async (product) => {
    const newProductReponseJson = createProduct(product);
    setProducts((prevState) => {
      return [...prevState, ...[{ ...product, id: newProductReponseJson.id }]];
    });
  };

  const value = {
    products: products,
    addNewProduct: addNewProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
