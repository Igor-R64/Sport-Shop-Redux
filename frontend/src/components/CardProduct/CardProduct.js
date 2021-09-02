import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';
import CardItem from '../CardItem';
import PropTypes from 'prop-types';

function CardProduct(props) {

  const { addGoodToBasket, products } = props;

  return (
    <>
      {products.map((item) => (
        <Col key={item.id} sm="3" className=" container-xxl d-flex p-4">
          <CardItem
            preOrdered={props.goodsForOrder.find(i => i.id === item.id)}
            addGoodToBasket={addGoodToBasket}
            item={item} />
        </Col>
      ))}
    </>
  );
}
export default CardProduct;
CardProduct.propTypes = {
  goodsForOrder: PropTypes.array,
  addGoodToBasket: PropTypes.array,
}





