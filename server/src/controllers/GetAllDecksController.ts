import { Request, Response } from 'express';
import Deck from '../schema/Decks';


export async function GetAllDecks(req: Request , res: Response) {
    res.send(await Deck.find());
}
