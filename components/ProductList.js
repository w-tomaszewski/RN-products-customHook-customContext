import { FlatList } from "react-native";
// import useProducts from '../hooks/useProducts';
import Product from "./Product";
import { ProductContext } from "../store/context/useProductContext";
import { useContext } from "react";

const ProductList = () => {
  const productCtx = useContext(ProductContext);

  const renderProduct = ({ item }) => {
    return <Product product={item} />;
  };

  return (
    <FlatList
      data={productCtx?.products ?? []}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default ProductList;
