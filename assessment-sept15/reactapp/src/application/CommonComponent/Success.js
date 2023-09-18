import React, { useState } from "react";

import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";

let Success = (props) => {

    const [ste, setSte] = useState("")

    const executedByChild = (val) => {
        console.log(val);
        setSte(val);
    }

    return(
        <>
            <ul>
                <li>“All our dreams can come true; if we have the courage to pursue them.” – Walt Disney.</li>
                <li>“However difficult life may seem, there is always something you can do and succeed at.” – Stephen Hawking.</li>
                <li>“People begin to become successful the minute they decide to be.” – Harvey MacKay.</li>
                <li>{ste}</li>
            </ul>
            <SuccessChild name="Test" address="57 Test adress" story={SuccessStory(executedByChild)}/>
        </>
    )
}

export default Success;