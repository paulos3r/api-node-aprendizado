import express, {Request, Response} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
//import api
import apiRouter from './routes/testeRoute'


dotenv.config();

const server = express();

server.use(cors({
    //liberar sites para utilizar api "dominio"
    //origin:  'https://resttesttest.com' 
    origin: '*'
}));

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(apiRouter);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json( {
        error: 'Endpoint não encontrado. '
    });
})

server.listen(process.env.PORT);