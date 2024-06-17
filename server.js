import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
 await prisma.user.create({
    data: {
      email: req.body.email,
      Nome: req.body.Nome,
      }
  });

  res.status(201).json(req.body);
  
});

app.get('/users', async (req, res) => {
  const user = await prisma.user.findMany();
  res.status(200).json(user);
});

app.post('/Livros', async (req, res) => {
  await prisma.post.create({
    data: {
      ISBN: req.body.ISBN,
      titulo: req.body.titulo,
      Categoria: req.body.Categoria,
      Autor: req.body.Autor,
    }
  });

  res.status(201).json(req.body);
});

app.get('/Livros', async (req, res) => {
  const livro = await prisma.post.findMany();
  res.status(200).json(livro);
});

app.listen(3000, () => console.log('Server running on port 3000'));
