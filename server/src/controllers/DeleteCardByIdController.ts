import { Request, Response } from 'express';
import Deck from '../schema/Decks';


export async function DeleteCardById(req: Request , res: Response) {
    const {deckId, cardId} = req.params;
    const deck = await Deck.findById(deckId);
    if(!deck) return res.status(404).send('Deck not found');
    deck.cards.splice(parseInt(cardId), 1);
    await deck.save();
    res.send(deck);
}