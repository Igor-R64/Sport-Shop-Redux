import React, { useState, useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct.js';
import HomePage from '../HomePage/HomePage.js';
import Contacts from '../Contacts/Contacts.js';
import Navigation from '../Navigation';
import BasketGoods from '../BasketGoods/BasketGoods.js';
import MainMenu from '../MainMenu';
import OrderPage from '../OrderPage/Orderpage.js';
// import Footer from '../Footer/Footer.js';
import { Container, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {

  const [uuid, setUuid] = useState("");

  const [goodsForOrder, updateBasket] = useState([]);

  const clearBasket = () => { updateBasket([]); };

  const deleteGoodFromBasket = (id) => updateBasket(goodsForOrder.filter(item => item.id !== id));

  const addGoodToBasket = (id, count = "1") => {
    const isAddedElementAlreadyExist = goodsForOrder.find(el => el.id === id);

    if (isAddedElementAlreadyExist) {
      updateBasket([...goodsForOrder.filter(item => item.id !== id), { id, count }]);
    } else {
      updateBasket([...goodsForOrder, { id, count }]);
    }
  };

  const [products, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/goods')
      .then(res => res.json())
      .then((result) => setItems(result))
      .catch((e) => console.log(e))
  }, [])



  return (
    <Router>
      <div className="wrapper">
        <Col sm="12" className="menu" >
          <MainMenu />
        </Col>
        <Col sm="12" className="navi">
          <Navigation
            count={goodsForOrder.length} />
        </Col>
        <Container className="">
          <Col sm="12" className="d-flex flex-wrap justify-content-around">
            <Route path='/products'>
              <CardProduct
                goodsForOrder={goodsForOrder}
                addGoodToBasket={addGoodToBasket} />
            </Route>
            <Route path='/' exact component={HomePage} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/order'>
              <OrderPage
                count={goodsForOrder}
                uuid={uuid}
              />
            </Route>
            <Route path='/basket'>
              <BasketGoods
                setUuid={setUuid}
                products={products}
                clearBasket={clearBasket}
                goodsForOrder={goodsForOrder}
                addGoodToBasket={addGoodToBasket}
                deleteGoodFromBasket={deleteGoodFromBasket}
              />
            </Route>
          </Col>
        </Container>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;