import React, { useState, useEffect } from 'react';
import CardProduct from '../CardProduct/CardProduct.js';
import HomePage from '../HomePage/HomePage.js';
import Contacts from '../Contacts/Contacts.js';
import Navigation from '../Navigation';
import BasketGoods from '../BasketGoods/BasketGoods.js';
import MainMenu from '../MainMenu';
import OrderPage from '../OrderPage/Orderpage.js';
import { getProduct } from '../../store/actions/AppActions.js';
import { connect } from 'react-redux';
import { Container, Col } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App(props) {
  
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

  useEffect(() => {
    props.getProduct()
  }, [])

  const { app } = props;


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
                products = {app.products}
                isFetching = {app.isFetching}
                error={app.error}
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
                clearBasket={clearBasket}
                goodsForOrder={goodsForOrder}
                addGoodToBasket={addGoodToBasket}
                deleteGoodFromBasket={deleteGoodFromBasket}
              />
            </Route>
          </Col>
        </Container>
      </div>
    </Router>
  );
}

const mapStateToProps = store => {
  return {
    app: store.app,
  }
}

const mapDispatchToProps = dispatch => ({
  getProduct: products => dispatch(getProduct()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);