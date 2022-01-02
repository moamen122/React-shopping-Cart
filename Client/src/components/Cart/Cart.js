import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import "../../css/Cart/Cart.css"
import Modal from 'react-modal'
import { removeCart } from '../../store/actions/cart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

function Cart(props) {


    const [showForm, setShowForm] = useState(false);
    const [order, setOrder] = useState(false);
    const [value, setValue] = useState("");
    const submitOrder = (e) => {
        e.preventDefault();
        const order = {
            name: value.name,
            email: value.email
        }
        setOrder(order);
    }

    const handleChange = (e) => {
        setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    return (
        <div className="cart-wrapper">
            <Modal isOpen={order}>
                <div className="order-info">
                    <p className="alert-success"> Order Done Successfuly</p>
                    <table>
                        <tr>
                            <td> Name:</td>
                            <td> {order.name}:</td>
                        </tr>
                        <tr>
                            <td> Email:</td>
                            <td> {order.email}:</td>
                        </tr>
                        <tr>
                            <td> Total:</td>
                            <td> {props.cartItems.reduce((a, p) => {
                                return a + p.price
                            }, 0)}:</td>

                        </tr>
                        <tr>
                            <td>
                                <tr> Selected Items</tr>
                            </td>
                            <td> {props.cartItems.map(p => (
                                <div className="cart-data">
                                    <p>Number of this products: {p.qty}</p>
                                    <p>Title of this products: {p.title}</p>

                                </div>
                            ))} </td>
                        </tr>


                    </table>
                </div>

            </Modal>
            <Fragment>
                <div className="cart-title"> {props.cartItems.length === 0 ? 'Cart Empty' : <p>
                    There is {props.cartItems.length} products in cart
                </p>} </div>
                <div className="cart-items">
                    {props.cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.imageurl} alt="" />
                            <div className="cart-info">
                                <div>
                                    <p> title {item.title}</p>
                                    <p> qty {item.qty} </p>
                                    <p>price ${item.price}</p>
                                </div>
                                <button onClick={() => props.removeCart(item)}>remove</button>

                            </div>

                        </div>

                    ))}

                </div>
                {
                    props.cartItems.length !== 0 &&
                    (
                        <div className="cart-footer">
                            <div className="total" >total : $ {props.cartItems.reduce((acc, p) => {
                                return acc + p.price
                            }, 0)} </div>
                            <button onClick={() => setShowForm(true)}>  select Products</button>
                        </div>

                    )
                } {/*checkout form */}
            </Fragment>

            <CheckoutForm showForm={showForm}
                value={value}
                submitOrder={submitOrder}
                setShowForm={setShowForm}
                handleChange={handleChange} />


        </div>


    )
}
export default connect(
    (state) => {
        return {
            cartItems: state.cart.cartItems
        }
    }, { removeCart }
)(Cart);