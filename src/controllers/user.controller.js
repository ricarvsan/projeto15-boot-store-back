import bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid';
import { db } from '../database/database.connection.js';

export async function getUsers(req, res) {
    const {name} = req.body;

    try {
        const user = await db.collection('users').findOne({name});
        if(user) return res.status(409).send('Já existe um usuário com este nome cadastrado!')

        res.status(201).send('Usuário criado com sucesso!')
    } catch (err) {
        res.status(500).send(err.message)
    }
}