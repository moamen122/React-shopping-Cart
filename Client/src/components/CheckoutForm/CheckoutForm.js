import React, { Fragment } from 'react'
import "../../css/CheckoutForm/CheckoutForm.css"
import Input from '../Input/Input'
import Zoom from 'react-reveal/Zoom'


function CheckoutForm(props) {
    return (

        <Fragment>
            {props.showForm &&

                <div className="checkout-form">
                    <span className="close-icon" onClick={() => props.setShowForm(false)}>&times; </span>
                    <Zoom>
                        <form onSubmit={props.submitOrder}>
                            <Input
                                label="name"
                                type="text"
                                onChange={props.handleChange}
                                name="name" />
                            <Input
                                label="email"
                                type="email"
                                onChange={props.handleChange}
                                email="email" />
                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </Zoom>
                </div>}
        </Fragment>

    )
}
export default CheckoutForm