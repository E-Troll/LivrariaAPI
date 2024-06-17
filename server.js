import express from 'express'

const app = express()
app.use(express.json())

const Livros = []
const users = []

app.post('/users', (req, res) =>{

    users.push(req.body)

    res.send('Login Efetuado com sucesso')
})

app.get('/users', (req, res) =>{
    res.status(200).json(users)
})

app.post('/Livros', (req, res) =>{

    Livros.push(req.body)

    res.send('Livro inserido com Sucesso !')
})

app.get('/Livros', (req, res) =>{
    res.status(200).json(Livros)
})

app.listen(3000)


/*  
u5EmJtMNNlMSNWgo
*\