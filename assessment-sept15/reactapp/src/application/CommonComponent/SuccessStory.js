import React from "react";

function SuccessStory (props) {
    return(
        <>
            <p onClick={() => {
                console.log(props);
                props(Math.random());
            }}>This is a success story all about  how my life got  flipped turned upside down</p>
        </>
    )
}

export default SuccessStory;