import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
    title: 'string',
});

const DeckModel = mongoose.model('Deck', DeckSchema);

export default DeckModel;