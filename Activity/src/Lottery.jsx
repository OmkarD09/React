import { useState } from "react";

function Lottery() {

    const [LotteryNumber, setLotteryNumber] = useState("0");

    const getNumber =  () => { 
        setLotteryNumber((number) => 
            Math.floor(Math.random() * 1000));
        return number;
    }

    function sumOfDigits(num) {
        let sum = 0;
        while (num > 0) {
        sum += num % 10; // Add the last digit
        num = Math.floor(num / 10); // Remove the last digit
        }
        return sum;
        }

    return(
        <div>
            <h2>Lottery</h2>
            <button onClick={() => setLotteryNumber(getNumber())}>Get a Ticket</button>
            <p>Your Number is {LotteryNumber}</p>

            {
                LotteryNumber !== "0" ? (sumOfDigits(LotteryNumber) === 15 ? 
                <p>Congratulations! You win!</p> :
                <p>Sorry, better luck next time.</p>)
             : <p>Click the button to get your lottery number.</p>
            }

            
        </div>
    )
};

export default Lottery