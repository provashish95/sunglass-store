
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import SingleProduct from './components/SingleProduct/SingleProduct';



function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  const test = (cart) => {
    if (cart.length == 0) {
      alert('please add to cart');
      return;
    } else {
      const randomNumber = Math.floor((Math.random() * 4));
      setSingleProduct(cart[randomNumber]);
    }

  }


  return (
    <div className="App">
      <Header></Header>
      <SingleProduct singleProduct={singleProduct}></SingleProduct>
      <div className="container">
        <div className="row mt-5 d-flex justify-content-end">
          <div className="col-12 col-md-8  order-2 order-md-1">
            <div className="row g-4 ">
              {
                products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
              }
            </div>
          </div>
          <div className="col-12 col-md-4  order-1 order-md-2">
            <div className="card shadow-lg p-3 mb-3 bg-body rounded text-center">
              <div className="card-body">
                {
                  cart.map(item => <Cart key={item.id} item={item}></Cart>)
                }
                <button onClick={() => test(cart)}>test</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
