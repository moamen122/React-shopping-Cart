import React, { useState } from 'react'
import "../../css/Cart/Cart.css"
function Cart(props) {
    const [showForm, setShowForm] = useState(false)
    return (
        <div className="cart-wrapper">
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
                        <div className="total" >total : {props.cartItems.reduce((acc, p) => {
                            return acc + p.price
                        }, 0)} </div>
                        <button onClick={() => showForm}>  select Products</button>
                    </div>
                )
            }
            {showForm &&

                <div className="checkout-form">
                    <span className="close-icon" onClick={() => setShowForm(false)}>&times; </span>
                    <form>
                        <div>
                            <label>Name</label>
                            <input type="text" required name="name" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" required name="email" />
                        </div>
                        <div>
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </div>}
        </div>

    )
}
export default Cart;