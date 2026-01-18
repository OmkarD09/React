import { useState } from "react";
import { genTicket, sumOfArray } from "./helper";
import Ticket from "./Ticket";



function Lottery({ n, winningSum }) {
    let [tickets, setTickets] = useState(genTicket(n));

    let isWinning = sumOfArray(tickets) === winningSum;

    return (
        <div>
            <h2>Lottery</h2>
            <div className="tickets">
                <Ticket numbers={tickets} />
            </div>

            <br />

            <button onClick={() => setTickets(genTicket(n))}>Get New Ticket</button>

            <div>{isWinning ? "You Win!" : "Try Again"}</div>
        </div>
    );
}

export default Lottery;