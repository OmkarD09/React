import Product from "./product";

function ProductTab() {
  return (
    <div className="ProductTab">
        <Product name="Phone" price={10} description="A Good Phone" features={["Feature 1", "Feature 2", "Feature 3"]}/>
        <Product name="Laptop" price={20} description="A Good Laptop" features={["Feature A", "Feature B", "Feature C"]} />
        <Product name="TV" price={30} description="A Good TV" features={["Feature X", "Feature Y", "Feature Z"]} />
    </div>
  );
}

export default ProductTab;