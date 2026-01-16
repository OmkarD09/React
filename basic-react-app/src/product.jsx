import "./product.css"

function Product({name, price, description, features}) {
  let isDiscounted = price > 20;
  let style = {
    color: isDiscounted ? "red" : "black",
  }; 
  
  return (
    <div className="Product">
      <h2 style={style}>Product Component
        {name} - ${price}
      </h2>
      <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        {isDiscounted && <p>Discount : 5%</p>}
    </div>
  );
}


export default Product;