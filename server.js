import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
 await prisma.user.create({
    data: {
      email: req.body.email,
      Nome: req.body.Nome
      }
  });

  res.status(201).json(req.body);
  
});

app.get('/users', async (req, res) => {
  const user = await prisma.user.findMany();
  res.status(200).json(user);
});

app.put('/users/:email', async (req, res) => {
  const updatedUser = await prisma.user.update({
    where: {
      email: req.params.email
    },
    data: {
      email: req.body.email,
      Nome: req.body.Nome
    }
  });

  res.status(200).json(updatedUser);
});

app.post('/Livros', async (req, res) => {
  await prisma.post.create({
    data: {
      ISBN: req.body.ISBN,
      titulo: req.body.titulo,
      Categoria: req.body.Categoria,
      Autor: req.body.Autor
    }
  });

  res.status(201).json(req.body);
});

app.get('/Livros', async (req, res) => {
  const livro = await prisma.post.findMany();
  res.status(200).json(livro);
});

app.put('/Livros/:ISBN', async (req, res) => {
  const updatedLivro = await prisma.livro.update({
    where: {
      ISBN: req.params.ISBN
    },
    data: {
      ISBN: req.body.ISBN,
      titulo: req.body.titulo,
      Categoria: req.body.Categoria,
      Autor: req.body.Autor
    }
  });

  res.status(200).json(updatedLivro);
});

app.listen(3000, () => console.log('Server running on port 3000'));
