//require
const express = require('express');
const app = express();

// ===== Connection to Database ===== //



// ===== Middleware ===== //
const fruits = ['apple', 'banana', 'pear'];

// ===== Routes ===== //
// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Index
app.get('/fruits', (req, res) => {
    res.send(fruits);
});
// New

// Delete

// Update

// Create

// Edit 

// Show
app.listen(3000, () => {
    console.log('listening');
});
