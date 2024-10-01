import express from "express"

const app = express()
const PORT = 3000

app.get('/user', (req, res) => {
    res.send("This is the Home page");
});
app.listen(PORT , ()=>{
    console.log(`The server is listening on http://localhost:${PORT}`)
})