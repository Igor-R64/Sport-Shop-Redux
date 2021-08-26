import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

import "./Orderpaje.css"

function OrderPage({uuid}) {


  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="orderpage container-xxl">
      <Jumbotron>
        <h1 className="display-3">Заказ успешно оформлен!</h1>
        <p className="lead">Спасибо Вам, что выбрали наш магазин.</p>
        <hr className="my-2" />
        <p>Заказ # {uuid} успешно оформлен и будет доставлен через 5 дней.</p>
        <p className="lead">
          <Button
            color="primary"
            onClick={handleClick}>
            Вернутся на главную
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default OrderPage;