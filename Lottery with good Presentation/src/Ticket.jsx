import TicketNumbers from "./TicketNumbers";
import "./Ticket.css";

export default function Ticket({ numbers }) {
    return (
        <div className="Ticket">
            <p>Ticket</p>
            {numbers.map((num, index) => (
                <TicketNumbers key={index} num={num} />
            ))}
        </div>
    );
}