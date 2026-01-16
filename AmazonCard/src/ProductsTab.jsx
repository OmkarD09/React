import Product from "./Product";

function ProductsTab() {
    let style = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    };


    return (
        <div style={style}>
            <Product title={"Samsung S25 Ultra"} price={999} discount={10} description={"Latest Samsung smartphone with advanced features"} />
            <Product title={"Apple iPhone 14"} price={1099} discount={5} description={"New generation iPhone with improved performance"} />
            <Product title={"Google Pixel 7"} price={799} description={"Google's flagship phone with excellent camera"} />
            <Product title={"OnePlus 10 Pro"} price={899} discount={15} description={"High-performance phone with fast charging"} />
        </div>
    );
}

export default ProductsTab;