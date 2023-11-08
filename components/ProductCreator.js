import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// import useProducts from '../hooks/useProducts';
import { useState, useContext } from "react";
import { ProductContext } from "../store/context/useProductContext";
import { PRAVATAR_URL } from "../constants";

const ProductCreator = () => {
  const productCtx = useContext(ProductContext);

  const initialFormState = {
    title: "",
    price: "",
    description: "",
    category: "",
  };

  const [form, setForm] = useState(initialFormState);

  const handleInputChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    await productCtx.addNewProduct({
      title: form.title,
      price: form.price,
      description: form.description,
      category: form.category,
      image: PRAVATAR_URL,
    });
    setForm(initialFormState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add new product</Text>
      <View style={styles.row}>
        <Text>Title</Text>
        <TextInput 
        style={styles.input} 
        value={form.title}
        onChangeText={(text) => handleInputChange("title", text)}
        />
      </View>
      <View style={styles.row}>
        <Text>Price</Text>
        <TextInput 
        style={styles.input}
          value={form.price}
          onChangeText={(text) => handleInputChange("price", text)}
          keyboardType="numeric"
          />
      </View>
      <View style={styles.row}>
        <Text>Description</Text>
        <TextInput
          style={styles.input}
          value={form.description}
          onChangeText={(text) => handleInputChange("description", text)}
        />
      </View>
      <View style={styles.row}>
        <Text>Category</Text>
        <TextInput
          style={styles.input}
          value={form.category}
          onChangeText={(text) => handleInputChange("category", text)}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
        <Text>Add product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  header: {
    fontSize: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  input: {
    backgroundColor: "white",
    width: 100,
  },
  btn: {
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "yellow",
    padding: 5,
  },
});

export default ProductCreator;
