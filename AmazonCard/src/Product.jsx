import ProductPrice from "./ProductPrice";
import ProductDescription from "./ProductDescription";
import ProductTitle from "./ProductTitle";

function Product({ title, price, discount, description }) {
    let style = {
        border: '1px solid gray',
        borderRadius: '10px',
        padding: '15px',
        margin: '15px',
        width: '250px'
    };

    
    return (
        <div className="product" style={style}>
            <ProductTitle title={title} />
            <ProductDescription description={description} />
            <ProductPrice price={price} discount={discount} />
        </div>
    );
}

export default Product;