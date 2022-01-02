import { FETCH_PRODUCTS, FILTER_MODEL, FILTER_SORT } from "./types"

export const fetchProducts = () => {
    return (dispatch) => {
        fetch('/api/products').then(res => res.json()).then(data => {
            dispatch({
                type: FETCH_PRODUCTS,
                data: data
            })
        })
    }
}
export const filteredModel = (products, value) => {
    return (dispatch) => {
        let productsClone = [...products]
        let newProducts = productsClone.filter(p => p.models.indexOf(value) != -1);
        dispatch({
            type: FILTER_MODEL,
            data: {
                model: value,
                products: value == "ALL" ? products : newProducts
            }
        })
    }

}
export const filteredSort = (products, value) => {
    return (dispatch) => {
        let productsClone = [...products]
        let newProducts = productsClone.sort(function (a, b) {
            if (value == "lowest") {
                return a.price - b.price
            } else if (value = "highest") {
                return b.price - a.price
            }
            else {
                return a.id < b.id ? 1 : -1
            }

        });
        dispatch({
            type: FILTER_SORT,
            data: {
                sort: value,
                products: newProducts
            }
        })

    }
}