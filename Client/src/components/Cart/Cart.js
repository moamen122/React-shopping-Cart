import React, { Fragment, useState } from 'react'
import "../../css/Cart/Cart.css"
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Bounce from 'react-reveal/Bounce';

function Cart(props) {


    const [showForm, setShowForm] = useState(false);
    const [value, setValue] = useState("")
    const submitOrder = (e) => {
        e.preventDefault();
        const order = {
            name: value.name,
            email: value.email
        }
    }

    const handleChange = (e) => {
        setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    return (
        <div className="cart-wrapper">

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
                                <button onClick={() => props.removeFromCart(item)}>remove</button>

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
export default Cart;