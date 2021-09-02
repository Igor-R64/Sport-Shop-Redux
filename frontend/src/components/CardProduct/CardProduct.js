import React from 'react';
import { Col } from 'reactstrap';
import CardItem from '../CardItem';
import PropTypes from 'prop-types';
import "./CardProduct.css";

function CardProduct(props) {

  const { addGoodToBasket, products, isFetching, error } = props;

  if (error) {
    return <div className="alert alert-danger m-5">Во время загрузки фото произошла ошибка</div>
  }

  if (isFetching) {
    return <div className="loader">Loading...</div>
  } else {
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


}
export default CardProduct;
CardProduct.propTypes = {
  goodsForOrder: PropTypes.array,
  addGoodToBasket: PropTypes.array,
}





