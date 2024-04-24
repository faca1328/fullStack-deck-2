import { Request, Response } from 'express';
import Deck from '../schema/Decks';


export async function DeleteById(req: Request , res: Response) {
    const deck = await Deck.findById(req.params.deckId);
    const deleteDeck = await Deck.findByIdAndDelete(deck);
    res.send(deleteDeck);
}