// import express from "express";
// import cors from "cors";
const express = require("express");
const cors = require("cors")
const PORT = 4000;
const app = express();
// middleware for cors
app.use(
    cors({
        origin: ["http://localhost:5173", "http://13.232.135.156"],
    })
);
app.listen(PORT, () => {
    console.log(`server is started on port ${PORT}`);
});
let users = [
    { name: "Yogesh", email: "yogesh@gmail.com" },
    { name: "virat", email: "virat@gmail.com" },
    { name: "dhoni", email: "dhoni@gmail.com" },
    { name: "deepak", email: "deepak@gmail.com" },
];
app.get("/api/users", (req, res) => {
    res.status(200).json({
        status: true,
        users,
    });
});
