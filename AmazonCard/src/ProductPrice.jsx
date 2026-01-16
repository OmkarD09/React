function ProductPrice({ price, discount }) {
 

    const discountedPrice = discount ? (price - (price * discount) / 100).toFixed(2) : price.toFixed(2);

    return (
        <div style={{ backgroundColor: 'gold' }}><span> <strike>{price}</strike></span> <span> {discountedPrice}</span></div>
    );
}

export default ProductPrice;