import express from "express";

const app = express();

// Define your routes
app.get('/user', (req, res) => {
    res.send("This is the User page");
});

// Export the app to be used in Vercel's serverless function
export default app;
