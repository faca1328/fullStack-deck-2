import express from "express";
import 'dotenv/config'
import mongoose from 'mongoose';
import Deck from './schema/Decks'


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());



 


app.get('/api', (req, res) => {
    res.send("<h1> API </h1>");
})


//esperamos a que la promesa de conectarse a la db se haga para ejecutar el backend
mongoose.connect(`mongodb+srv://facundoivanmartinez:${process.env.DB_PASSWORD}@fullstac-deck-2.98psjhq.mongodb.net/?retryWrites=true&w=majority&appName=fullStac-deck-2`)
        .then(() => {
    app.listen(PORT, ()=> { console.log(`listening at ${PORT}`) });
});
