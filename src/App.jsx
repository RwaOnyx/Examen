import { useState, useEffect } from 'react';
import ProductForm from "./components/ProductForm"
import ProductList from "./components/ProductList"
import Product from './components/Product';
import './components/style.css';


function App() {

  const [productList, setProductList] = useState(() => {
    const lastProductList = localStorage.getItem('productList');
    return lastProductList ? JSON.parse(lastProductList) : [{ name: "", description: "", price: "" }];
  });

  const onAddProduct = (product) => {
    setProductList([...productList, product]);
  };

  const onUpdateProduct = (index, newName) => {
    const updatedList = productList.map((product, idx) => {
      if (idx === index) {
        return { ...product, name: newName };
      }
      return product;
    });
    setProductList(updatedList);
  };

  const onRemoveProduct = (index) => {
    const removedList = productList.filter((_, idx) => idx !== index);
    setProductList(removedList);
  };

  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(productList));
  }, [productList]);

  return (
    <>
      <h1>Produits</h1>
      <section className='firstSection'>
        <ProductForm onAddProduct={onAddProduct}/>
        <ProductList productList={productList} onUpdateProduct={onUpdateProduct} onRemoveProduct={onRemoveProduct} />
      </section>
      <section className='secondSection'>
        <h2>Produits en détails</h2>
        <Product productList={productList}/>
      </section>
    </>
  )
}

export default App