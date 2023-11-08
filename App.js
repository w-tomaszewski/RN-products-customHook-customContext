import { SafeAreaView, StyleSheet } from 'react-native';
import ProductList from './components/ProductList';
import ProductCreator from './components/ProductCreator';
import ProductContextProvider from './store/context/useProductContext';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductContextProvider>
        <ProductCreator />
        <ProductList />
      </ProductContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    gap: 10,
  },
});

export default App;
