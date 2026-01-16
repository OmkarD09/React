function ProductPrice({ price, discount }) {

    const discountedPrice = discount ? (price - (price * discount) / 100).toFixed(2) : price.toFixed(2);

    return (
        <span> {price}</span> +
        <span>  {discountedPrice}</span>
    );
}

export default ProductPrice;