import { useState } from "react";
import './lottery.css';
import { genTicket, sumOfArray } from "./helper";



function LotteryUsingArray() {
    let [tickets, setTickets] = useState(genTicket(3));

    let isWinning = sumOfArray(tickets) === 15;





    return (
        <div>
            <h2>Lottery Using Array</h2>
            <div className="tickets">
                <span>{tickets[0]}</span>
                <span>{tickets[1]}</span>
                <span>{tickets[2]}</span>
            </div>

            <br />

            <button onClick={() => setTickets(genTicket(3))}>Get New Ticket</button>

            <div>{isWinning ? "You Win!" : "Try Again"}</div>
        </div>
    );
}

export default LotteryUsingArray;