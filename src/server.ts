import express from 'express';
import { expressMiddleware } from '@as-integrations/express5';
import { prismaClient } from './lib/db';
import  createApollographServer  from './graphql';
import { User } from './graphql/user';
import UserService from './service/user';
import PostService from './service/post';

async function init() {
    const app = express();
    const PORT = Number(process.env.PORT) || 8000;

    app.use(express.json());


app.use('/graphql',expressMiddleware(await createApollographServer(),{context: async({req}) => {
    // @ts-ignore
    const token = req.headers["token"]
    try {
        const user = UserService.decodeJWTtoken(token as string)
        return {user}
    } catch (error) {
        return {user: null}
    }
}}));

app.get('/', (req, res) => {
    res.json({message: 'Server up and runnning'})
})

app.listen(PORT,"0.0.0.0", () => console.log(`Server running on port ${PORT}`))
}

init();


