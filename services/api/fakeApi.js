import { FAKE_API_URL } from "../../constants";

export async function getProducts() {
  try {
    const productsResponse = await fetch(`${FAKE_API_URL}/products`);
    return await productsResponse.json();
  } catch (e) {
    console.log("error when fetchData");
  }
}

export async function createProduct(product) {
  try {
    const createProductResponse = await fetch(`${FAKE_API_URL}/products`, {
      method: "POST",
      body: JSON.stringify(product),
    });
    return await createProductResponse.json();
  } catch (e) {
    console.log("error when createProduct");
  }
}
