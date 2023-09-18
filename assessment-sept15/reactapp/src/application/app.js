import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./app.css"
import Success from "./CommonComponent/Success";
import UserSignIn from "./CommonComponent/UserSignIn";

//import ChildComponent from "./CommonComponent/ChildComponent";



export default class Application extends Component {

        render(){
            return( 
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                   
                        <Routes>
                            <Route path="/" element={<Success/>}/>
                            <Route path="/user" element={<UserSignIn/>}/>
                        </Routes>
                   
                    </Suspense>
                </Router>
            )
        }
}