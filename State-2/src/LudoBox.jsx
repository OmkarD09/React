import React from 'react'
import { useState } from 'react';

function LudoBox() {

    const [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });


    function UpdateBlue() {

        setMoves(prevMoves => {
            return { ...prevMoves,  blue: prevMoves.blue + 1 };
        });

    }

    function UpdateRed() {
        setMoves(prevMoves => {
            return { ...prevMoves,  red: prevMoves.red + 1 };
        });
    }

    function UpdateGreen() {
        setMoves(prevMoves => {
            return { ...prevMoves,  green: prevMoves.green + 1 };
        });
    }

    function UpdateYellow() {
        setMoves(prevMoves => {
            return { ...prevMoves,  yellow: prevMoves.yellow + 1 };
        });
    }



    return (
    <div>
      <h2>Ludo Game Box</h2>
        <div className="board">
            
            <p>Blue = {moves.blue} </p>
            <button style={{backgroundColor: "Blue"}} onClick={UpdateBlue}> +1</button>

            <p>Red = {moves.red} </p>
            <button style={{backgroundColor: "red"}}  onClick={UpdateRed}> +1</button>

            <p>Green = {moves.green}  </p>
            <button style={{backgroundColor: "green"}} onClick={UpdateGreen}> +1</button>  

            <p>Yellow = {moves.yellow} </p>
            <button style={{backgroundColor: "yellow"}} onClick={UpdateYellow}> +1</button>  

        </div>
    </div>
    
);

}

export default LudoBox;