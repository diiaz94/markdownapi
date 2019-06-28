const mongoose = require('mongoose');

let documentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    markdown_text: { type: String}
}, {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = documentSchema