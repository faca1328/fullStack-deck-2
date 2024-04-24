import express from "express";
import 'dotenv/config'
import mongoose from 'mongoose';
import cors from 'cors';
import { GetAllDecks } from "./controllers/GetAllDecksController";
import { PostNewDeck } from "./controllers/PostNewDeckController";
import { DeleteById } from "./controllers/DeleteByIdController";
import { PostNewCard } from "./controllers/PostNewCardController";
import { GetDeck } from "./controllers/GetDeckController";
import { DeleteCardById } from "./controllers/DeleteCardByIdController";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



app.get('/decks',  GetAllDecks);

app.post('/decks', PostNewDeck);

app.delete('/decks/:deckId',  DeleteById);

app.get('/decks/:deckId', GetDeck);
app.post('/decks/:deckId/cards', PostNewCard);
app.delete('/decks/:deckId/cards/:cardId', DeleteCardById);





//esperamos a que la promesa de conectarse a la db se haga para ejecutar el backend
mongoose.connect(`${process.env.DB_MONGO_URL_1}${process.env.DB_PASSWORD}${process.env.DB_MONGO_URL_2}`)
    .then(() => {
        app.listen(PORT, () => { console.log(`listening at ${PORT}`) });
    });
