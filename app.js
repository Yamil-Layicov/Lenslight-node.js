import express from "express";

const app = express();
const port = 4000   

app.get('/',(req,res) => {
    res.send("index sayfasi - 212")
})

app.listen(port,() => {
    console.log(`app running on port: ${port}` )
})