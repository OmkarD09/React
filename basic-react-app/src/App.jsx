import "./App.css";
import Title from "./title.jsx";
import Description from "./decription.jsx";

function App() {
  let name = "Omkar";
  let age = 20;
  return (
    <>
      <Title />
      <Description />
      name={name},  age={age} 
      <Description />
      <Title />
      <Description />
    </>
  );
}

export default App
