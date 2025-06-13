const express = require('express');
const app = express();



app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
function helloExpress(req, res, next){
    res.send("Hello and Welcome to my Portfolio!");
}
app.get("/", helloExpress);