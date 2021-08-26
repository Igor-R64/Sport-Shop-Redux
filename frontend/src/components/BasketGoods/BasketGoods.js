import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FaCartPlus, FaRubleSign } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import PropTypes from 'prop-types';


import './BasketGoods.css';

function BasketGoods(props) {

    const { products, goodsForOrder, addGoodToBasket, deleteGoodFromBasket, setUuid } = props;


    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isDisabled, setDisabled] = useState(true);


    let history = useHistory();

    function handleClick() {
        history.push("/order");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const goodsForModeration = { mail: mail, name: name, phone: phone, goods: goodsForOrder };

        fetch('/api/goods', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(goodsForModeration)
        }).then((response) => response.text().then((result) => setUuid(result)))
            .then((res) => {
                console.log(res);
                props.clearBasket();
                setTimeout(() => {
                    handleClick();
                }, 2000)
            })
            .catch((e) => console.log(e));
    }


    const productToOrder = [];

    let SortgoodsForOrder = goodsForOrder.sort((a, b) => a.id - b.id)

    SortgoodsForOrder.forEach(el => {
        let extendedEl;

        extendedEl = products.find(e => e.id === el.id);

        productToOrder.push({ ...extendedEl, count: el.count });

    })

    return (
        <>
            <div className="basket-title container-xxl">
                <h3>
                    Корзина товаров <FaCartPlus />
                </h3>
            </div>
            <div className="d-flex justify-content-between container-xxl">
                <Container className="mb-5 goods-to-order container-xxl " >
                    {productToOrder.map((item) => (
                        <Row key={item.id}>
                            <Col id='border' className="d-flex justify-content-evenly container-xxl">
                                <div>
                                    <img id='image' src={item.img} alt="альтернативный текст" />
                                </div>
                                <div className="d-flex align-items-center type-heading">
                                    {item.type}
                                </div>
                                <div className="d-flex align-items-center title-heading">
                                    {item.title}
                                </div>
                                <div className="d-flex align-items-center price-heading">
                                    <FaRubleSign /> {item.price}
                                </div>
                                <div className="d-flex align-items-center">
                                    <Form onSubmit>
                                        <FormGroup>
                                            <Label for="exampleSelect">Количество</Label>
                                            <Input
                                                type="select"
                                                name="select"
                                                id="exampleSelect"
                                                value={item.count}
                                                onChange={(e) => addGoodToBasket(item.id, e.target.value)}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
                                        </FormGroup>
                                    </Form>
                                </div>
                                <div className=" d-flex align-items-center ">
                                    <button
                                        onClick={() => deleteGoodFromBasket(item.id)}
                                        className="del" type="button">
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    ))}
                    <Form className="form-basket " onSubmit={handleSubmit}>
                        <Col className="col-md-4">
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email"
                                    name="email"
                                    id="exampleEmail"
                                    required
                                    placeholder="Введите email"
                                    value={mail}
                                    onChange={(e) => setMail(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleUsername">Имя</Label>
                                <Input type="username"
                                    name="username"
                                    id="exampleUsername"
                                    required
                                    placeholder="Введите имя"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePhone">Телефон</Label>
                                <Input type="phone"
                                    name="phone"
                                    id="examplePhone"
                                    required
                                    placeholder="Введите телефон"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)} />
                            </FormGroup>
                            {isDisabled && goodsForOrder.length === 0 ? (<Button className="btn btn-success mt-3" disabled={isDisabled} >Оформить заказ</Button>) : (<Button className="btn btn-success mt-3" disabled={false}> Оформить заказ </Button>)}

                        </Col>
                    </Form>
                </Container>

            </div>
        </>
    );
}


BasketGoods.propTypes = {
    goodsForOrder: PropTypes.array,
    handleDeleteElement: PropTypes.func,
    productToOrder: PropTypes.array,
    products: PropTypes.array,
    deleteGoodFromBasket: PropTypes.array,
    addGoodToBasket: PropTypes.array,
}

export default BasketGoods;
