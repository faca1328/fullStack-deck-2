import { Request, Response } from 'express';
import Deck from '../schema/Decks';


export async function PostNewDeck(req: Request , res: Response) {
    const newDeck = new Deck({
        title: req.body.title,
    });
    await newDeck.save();
    res.send(newDeck);
}