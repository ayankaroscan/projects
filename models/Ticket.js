const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const TicketSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['open', 'in progress', 'closed'], default: 'open' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', TicketSchema);