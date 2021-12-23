import React from 'react'
import '../../css/Filter/Filter.css'
function Filter() {
    return (
        <div className="filter-wrapper">
            <h2 className="filter-title">Filter</h2>
            <div className="num-of-products">Number of Products</div>
            <div className="filter-by-size">
                <span>Filter</span>
                <select className="select">
                    <option value="ALL">ALL</option>
                    <option value="Note9">Note9</option>
                    <option value="Note10">Note10</option>
                    <option value="Note20">Note20</option>
                    <option value="Note20ultra">Note20ultra</option>
                </select>
            </div>
            <div className="Order">
                <span>Order</span>
                <select className="filter-Order">
                    <option value="ALL">Latest</option>
                    <option value="Note9">Lower</option>
                    <option value="Note10">Highest</option>
                </select>
            </div>
        </div>
    )
}

export default Filter