import msg from "./msg.jsx";

function MsgBox() {
    return (
        <div className="MsgBox">
            {msg("Omkar", "blue")}
            {msg("Alice", "green")}
        </div>
    )
}

export default MsgBox;