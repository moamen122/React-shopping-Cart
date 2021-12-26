import React from 'react';
import Modal from 'react-modal';

function ProductModal(props) {
    const { product, closeModal } = props;
    return (
        <Modal isOpen={product} onRequestClose={closeModal}>
            <span className="close-icon" onClick={closeModal}>&times;</span>
            <div className="product-info">
                <img src={product.imageurl} alt={product.title} />
                <p> {product.title}</p>
                <p>{product.desc}</p>
            </div>
        </Modal>
    )
}
export default ProductModal;
