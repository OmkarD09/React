import { useState } from "react";

function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(0);


    const toggleSwitch = () => {
        setIsLiked(!isLiked);
        setLikes(likes + 1);
    };

    let likeStyle = {
        color: "red"
    };


    return (

        <p onClick={toggleSwitch} className="LikeButton" >

        {likes}  &nbsp;



        {isLiked? <i className="fa-regular fa-heart"></i>: <i className="fa-solid fa-heart" style={likeStyle}></i>
        } 
        
        </p>
    );
}

export default LikeButton;  
