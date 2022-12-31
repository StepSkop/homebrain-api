// import express from "express";
// import wol from "wake_on_lan";
// import dotenv from "dotenv";

const express = require('express')
const wol = require('wake_on_lan')
// const dotenv = require('dotenv')
// dotenv.config()
var app = express()
console.log(process.env.HOME_API_PC_ON_TOKEN);
app.post('/',function (req, res) {
    if (req.headers['acces-token'] === process.env.HOME_API_PC_ON_TOKEN) {
        console.log("GOT!");
        wol.wake(process.env.PC_MAC, { address:process.env.BROADCAST_IP});
        res.json({
            data: 'Starting STEPSKOP-PC'
        })
    } else {
        res.status(400).json({data:'Unauthenticated'})
    }
})

app.listen(6655, console.log('Listening on port 6655'))