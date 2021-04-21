import './ProductContainer.css';

const ProductContainer = (props) => {
    console.log(props)
    return( 
        <div className="product-container">
            <img src={props.image} className="product-image" alt="image"/>
            <div className="product-description">
                <div className="product-description-name">{props.name}</div>
                <div className="product-description-price">{props.price}đ</div>
                <div className="product-description-discount">{props.discount}</div>
            </div>
            <div className="product-cart">
                <i className="fas fa-cart-plus"></i>
            </div>
        </div>
    )
};

export default ProductContainer