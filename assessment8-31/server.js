// 1)   I first began by creating a new folder and ran npm init in that folder
//      Then I ran npm install express to install express and npm install nodemon to install nodemon
//      Then i required express and  created the express app


const express = require("express");
const app = express();


//2
app.get("/getInfo", function(req,res){
    res.send(JSON.stringify({
        "name":"getInfo",
    }))
})

//3 
/*  Application - this is the main app that runs different routers/express apps and can handle requests
    Request - this is what is sent to the server from the client to request a response
    Response - this is what is sent to the client from the server depending on the contents/validity of the request
    Router - the router is for routing a user based on the endpoint they are requesting
*/

//4
/*  If we do not havea package.lock.json, we will still be able to run the application, but we always need a package.json
    The package.lock.json will store and lock metadata about the dependencies, such as version number, but it is not required

*/

//5
const fs = require('fs');

//  moved to question 7 to show application mounting


//6
//  The main purpose of a RESTful API is to send a resource from the server when it receives a valid request for that resource.
//  A service is RESTful if the service adheres to REST principles
/* Stateless, front-end/backend, uniformity

*/

//7
const vaccApp = express();

//http://localhost:9000/vaccination/getVaccine?vaccineName=Pfizer&price=10&doses=3
vaccApp.get("/getVaccine", function(req, res){
    let vaccineName= req.query["vaccineName"];
    let price = req.query["price"];
    let doses = req.query["doses"];

    let vaccine = {vaccineName, price, doses};
    let vaccineStr = JSON.stringify(vaccine);

    fs.writeFile(`${vaccineName}.txt`, vaccineStr, (err)=>{
        if(err){
            throw err;
        }
        console.log("Vaccine written to file successfully");
    })
    res.send(vaccineStr)
})

app.use('/vaccination', vaccApp)

//8
vaccApp.get('/getVaccineByName/:name', function(req,res){
    const name = req.params["name"];
    fs.readFile(`./${name}.txt`, "utf8", (err, data)=>{
        if(err){
            throw err;
        }
        res.send(data);
    })
})


console.log("Listening on port 9000")
app.listen(9000)