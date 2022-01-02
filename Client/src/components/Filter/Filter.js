import React from 'react'
import '../../css/Filter/Filter.css'
import Flip from 'react-reveal/Flip'
import { connect } from 'react-redux'
import { filteredModel, filteredSort } from '../../store/actions/products'
function Filter(props) {
    return (
        <Flip >
            {props.filterProducts && <div className="filter-wrapper">
                <h2 className="filter-title">Filter</h2>
                <div className="num-of-products">Number of Products {props.filterProducts.length}</div>
                <div className="filter-by-size">
                    <span>Filter</span>
                    <select value={props.model} className="filter-select" onChange={(e) => props.filteredModel(props.filterProducts, e.target.value)} >
                        <option value="ALL">ALL</option>
                        <option value="Note9">Note9</option>
                        <option value="Note10">Note10</option>
                        <option value="Note20">Note20</option>
                        <option value="Note20ultra">Note20ultra</option>
                    </select>
                </div>
                <div className="Order">
                    <span>Order</span>
                    <select className="filter-Order" value={props.sort} onChange={(e) => props.filteredSort(props.filterProducts, e.target.value)} >
                        <option value="Latest">Latest</option>
                        <option value="lowest">Lower</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
            </div>}
        </Flip>
    )
}

export default connect((state) => {
    return {
        sort: state.products.sort,
        model: state.products.model,
        product: state.products.products,
        filterProducts: state.products.filterProducts

    }
}, {
    filteredModel,
    filteredSort
}
)(Filter)