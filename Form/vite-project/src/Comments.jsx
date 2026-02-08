import { useState } from "react";
import CommentForm from "./CommentForm.jsx";

export default function Comments() {
    const [comments, setComments] = useState([]);

    const handleCommentSubmit = (comment) => {
        // Add a unique ID to each comment for a stable key
        setComments((prevComments) => [...prevComments, { ...comment, id: Date.now() }]);
    };

    return (
        <div>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}><strong>{comment.name}:</strong> {comment.comment}</li>
                ))}
            </ul>
            <CommentForm onCommentSubmit={handleCommentSubmit} />
        </div>
    );
}
