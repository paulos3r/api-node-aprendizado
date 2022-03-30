import { Request, Response } from "express";




export const ping = (req: Request, res: Response)=>{
    res.json({
        pong: true
    });
}
export const random = (req: Request, res:Response)=>{
    let numRandon: number = Math.floor( Math.random() * 10 );
    
    res.json({
        number: numRandon,
    });
}
export const name = (req: Request, res: Response)=>{
    let nome = req.params.name;
    res.json({
        name: nome
    });

}