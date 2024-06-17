import express from 'express'
import { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const Livros = []
const users = []

app.post('/users', (req, res) =>{

  await prisma.user.create ({
        data: {
            email: req.body.email,
            Nome: req.body.Nome,
            Idade: req.body.Idade,
        }
    })

  res.status(201).json('req.body')
})

app.get('/users', (req, res) =>{
    res.status(200).json(users)
})

app.post('/Livros', (req, res) =>{

    Livros.push(req.body)

    res.status(201).json('req.body')
})

app.get('/Livros', (req, res) =>{
    res.status(200).json(Livros)
})

app.listen(3000)


