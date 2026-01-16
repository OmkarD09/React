import "./App.css";
import Title from "./title.jsx";
import Description from "./decription.jsx";
import ProductTab from "./productTab.jsx";
import Product from "./product.jsx";
import MsgBox from "./msgBox.jsx";

function App() {
  let name = "Omkar";
  let age = 20;
  return (
    <>
      <ProductTab />
      <MsgBox />
    </>
  );
}

export default App
