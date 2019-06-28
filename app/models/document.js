const mongoose = require('mongoose');
const DocumentSchema = require('../schemas/document');

const Document = mongoose.model('Document', DocumentSchema);

module.exports = Document;