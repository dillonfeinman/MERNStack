import React from "react";


export default function SuccessChild(props) {
    
    const name = props.name;
    const address = props.address;
    const story = props.story;
    return(
        <>
            <h2>SuccessChild's name: {name};</h2>
            <h2>SuccessChild's address: {address};</h2>
            <h2>SuccessChild's story: </h2>{story}
        </>
    )

}
