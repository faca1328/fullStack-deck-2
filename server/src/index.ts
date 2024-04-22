import express from "express";
import 'dotenv/config'
import mongoose from 'mongoose';
import Deck from './schema/Decks'


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());



app.get('/decks',  (req, res) => {
    res.send("<h1> Aca estarian mis 'Decks' </h1>");
})

app.post('/decks', async (req, res) => {
    const newDeck = new Deck({
        title: 'esto es un nuevo deck',
    });
    await newDeck.save();
    res.send(newDeck);
})






//esperamos a que la promesa de conectarse a la db se haga para ejecutar el backend
mongoose.connect(`mongodb+srv://facundoivanmartinez:${process.env.DB_PASSWORD}@fullstac-deck-2.98psjhq.mongodb.net/?retryWrites=true&w=majority&appName=fullStac-deck-2`)
    .then(() => {
        app.listen(PORT, () => { console.log(`listening at ${PORT}`) });
    });
