const mongoose = require('mongoose');
const { Schema } = mongoose;

const monsterSchema = new Schema({
    name: String,
    icon: String,
    body: String,
    general_element_weaknesses: [{ element: String, magnitude: Number }],
    general_element_resistances: [{ element: String, magnitude: Number }],
    general_alterations: [{ alteration: String, magnitude: Number }],
    breakable_parts: [String]
});

const Monsters = mongoose.model('Monsters', monsterSchema);
module.exports = Monsters;