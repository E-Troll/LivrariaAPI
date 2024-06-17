import express from 'express'

const app = express()
app.use(express.json())

const Livros = []

app.post('/Livros', (req, res) =>{

    Livros.push(req.body)

    res.send('OK Tudo Certo !')
})

app.get('/Livros', (req, res) =>{
    res.json(Livros)
})

app.listen(3000)


