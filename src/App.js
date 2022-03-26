
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


  const handleAddToCart = (selectedProduct) => {
    const existedProduct = cart.find(product => product.id === selectedProduct.id);
    if (existedProduct) {
      alert("Same Product Not Added");
      return;
    } else if (cart.length === 4) {
      alert("You Select Maximum 4 Items");
      return;
    } else {
      const newCart = [...cart, selectedProduct];
      setCart(newCart);
    }
  }

  const selectSingleProduct = (cart) => {
    if (cart.length === 0) {
      alert('Please Add to Cart');
      return;
    } else {
      const randomNumber = Math.floor((Math.random() * cart.length));
      setSingleProduct(cart[randomNumber]);
    }
  }

  const deleteCartProduct = () => {
    setCart([]);
    setSingleProduct([]);
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
                <button onClick={() => selectSingleProduct(cart)}>test</button>
                <button onClick={deleteCartProduct}>Choose again</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
