import React from 'react'
import "../../css/CheckoutForm/CheckoutForm.css"


export default function Input(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} required name={props.name} onChange={props.onChange} />

        </div>
    )
}
