import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import data from './data.json';
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
import { Provider } from 'react-redux'
import store from "./store/store";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [model, setModel] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const handleFilterByModel = (e) => {
    setModel(e.target.value);

    if (e.target.value == "ALL") {
      setProducts(data);

    } else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(p => p.models.indexOf(e.target.value) != -1); // return if more than -1 
      setProducts(newProducts);


    }
  }
  const handleFilterBySort = (e) => {
    let order = e.target.value;
    setSort(order);
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a, b) {
      if (order == "lowest") {
        return a.price - b.price
      } else if (order = "highest") {
        return b.price - a.price
      }
      else {
        return a.id < b.id ? 1 : -1
      }

    });
    setProducts(newProducts);
  }
  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    var isProductExist = true;
    cartItemsClone.forEach(p => {
      if (p.id == product.id) {
        p.qty++;
        isProductExist = false;
      }

    })
    if (isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 })
    }
    setCartItems(cartItemsClone);
  }
  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter(p => p.id !== product.id))
  }


  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products addToCart={addToCart} />
            <Filter
              productsNumber={products.length}
              model={model}
              sort={sort}
              handleFilterBySort={handleFilterBySort}
              handleFilterByModel={handleFilterByModel}

            />


          </div>
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </main>
        <Footer />

      </div>
    </Provider>
  );
}

export default App;
