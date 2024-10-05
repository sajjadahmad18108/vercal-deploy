import express from "express"

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send("This is the Home");
});
app.get('/user', (req, res) => {
    res.send("This is the user page");
});
app.listen(PORT , ()=>{
    console.log(`The server is listening on http://localhost:${PORT}`)
})