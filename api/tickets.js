
const express = require('express');
const Ticket = require('../models/Ticket');
const router = express.Router();

// Create a new ticket
router.post('/create', async (req, res) => {
    const { title, description } = req.body;
    try {
        const ticket = new Ticket({ title, description });
        await ticket.save();
        res.status(201).json(ticket);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Retrieve all tickets
router.get('/', async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Retrieve a single ticket by its unique identifier
router.get('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findOne({ id: req.params.id });
        if (!ticket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        return res.json(ticket); // Ensure we return here
    } catch (err) {
        console.error(err);  // Log the error for debugging
        return res.status(500).json({ error: 'Server error' }); // Return here as well
    }
});

// Update a ticket by its unique identifier
router.put('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
        res.json(ticket);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a ticket by its unique identifier
router.delete('/:id', async (req, res) => {
    try {
        const ticket = await Ticket.findOneAndDelete({ id: req.params.id });
        if (!ticket) 
        {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        else{
            return res.status(200).json({ message:"success" });
        }
            
       
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

