import { Model, DataType, DataTypes } from "sequelize";
import { sequelize } from "../instances/pgInstance";

export interface fraseInstance extends Model{
    id: number;
    autor: string;
    texto: string;
}
export const Frase = sequelize.define<fraseInstance>('frase', {
    id:{
        primaryKey:true,
        autoIncrement:true,
        type: DataTypes.INTEGER
    },
    autor:{
        type:DataTypes.STRING
    },
    texto:{
        type: DataTypes.STRING
    }
},
    {
        tableName: 'frases',
        timestamps: false
    });