import { request, Request, Response } from "express";
import Sequelize from "sequelize";
import { Frase } from '../models/frases'



export const ping = (req: Request, res: Response)=>{
    res.json({
        pong: true
    });
};
export const random = (req: Request, res:Response)=>{
    let numRandon: number = Math.floor( Math.random() * 10 );
    
    res.json({
        number: numRandon
    });
};
export const name = (req: Request, res: Response)=>{
    let nome = req.params.name;
    res.json({
        name: nome
    });

};
export const createFrase = async (req: Request, res: Response)=>{
    //esta capiturando texto e autor na req.body
    let {texto, autor} = req.body;

    let novaFrase = await Frase.create({
        autor,
        texto
    });
    res.status(201);
    res.json({
        id: novaFrase.id,
        autor,
        texto
    });
};
export const listFrase = async (req: Request, res: Response)=>{
    let list = await Frase.findAll();
    res.json({
        list
    });
};
export const getFrase = async (req: Request, res: Response)=>{
    let { id } = req.params
    let list = await Frase.findByPk(id);
        if(list){
            res.json({ list });
        }else{
            res.json({
                erro: "frase não encontrada"
            });
        }
};
export const updateFrase = async(req:Request, res: Response)=>{
    //envio por parametro na url
    let { id } = req.params;
    //envio corpo da requisição
    let { autor, texto } = req.body;
    let frase = await Frase.findByPk(id);
    if(frase){
        frase.autor = autor;
        frase.texto = texto;

        await frase.save();
    }else{
        res.json({
            error:"Frase nao encontrada"
        });
    }
};
export const deleteFrase = async (req:Request, res:Response)=>{
    let { id } = req.params;

    if(id){
        await Frase.destroy({
            where:{
                id: id
            }
        });
        res.json({
            mensagem: 'Frase foi deletada'
        });
    }else{
        res.json({
            error:'não encontramos a frase'
        });
    }
};

export const aleatorioFrase = async (req:Request, res: Response)=>{
    let frase = await Frase.findOne({
        order:[
            Sequelize.fn('RANDOM')
        ]
    });
    if(frase){
        res.json({
            frase
        });
    }else{
        res.json({
            error:'Não foi encontrada a frase'
        });
    }

}