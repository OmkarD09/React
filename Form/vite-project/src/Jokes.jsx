import { useState, useEffect } from "react";

export default function Jokes() {
    const [joke, setJoke] = useState("");

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then((response) => response.json())
            .then((data) => setJoke(data.value));
    }, []);

    const getNewJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then((response) => response.json())
            .then((data) => setJoke(data.value));
    }

    return <div>
        <p>{joke}</p>
        <button onClick={getNewJoke}>Get New Joke</button>
    </div>
}