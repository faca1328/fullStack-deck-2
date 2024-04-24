import { Request, Response } from 'express';
import Deck from '../schema/Decks';


export async function GetDeck(req: Request , res: Response) {
    const {deckId} = req.params;
    const deck = await Deck.findById(deckId);
    if(!deck) return res.status(404).send(console.log('deck not found'));
    res.json(deck);
}