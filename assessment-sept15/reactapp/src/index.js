import React from "react";
import * as ReactDOM from "react-dom/client";

import Application from "./application/app";

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Application />
)
