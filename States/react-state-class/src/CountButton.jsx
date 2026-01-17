import { useState } from "react";

function init() {
    let count = Math.floor(Math.random() * 10);
    console.log("Initial Count:", count);
    return count;
}

function CountButton() {

    const [count, setCount] = useState(init);

    const incrementCount = () => {

        return prevCount + 1;
        setCount(prevCount => {
        });

        console.log("Count:", count);
    };

    return (

        <button onClick={incrementCount} className="CountButton">
            {count} Likes
        </button>
    );
}

export default CountButton;


