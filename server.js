import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocorreu um erro no servidor.' });
});

// Criar usuário
app.post('/users', async (req, res, next) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email: req.body.email,
        Nome: req.body.Nome,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(error); // Encaminha para o middleware de tratamento de erros
  }
});

// Obter lista de usuários
app.get('/users', async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// Atualizar usuário
app.put('/users/:email', async (req, res, next) => {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        email: req.params.email,
      },
      data: {
        email: req.body.email,
        Nome: req.body.Nome,
      },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

// Excluir usuário
app.delete('/users/:email', async (req, res, next) => {
  try {
    await prisma.user.delete({
      where: {
        email: req.params.email,
      },
    });
    res.status(204).send(); // Sem conteúdo (usuário excluído com sucesso)
  } catch (error) {
    next(error);
  }
});

// Criar livro
app.post('/Livros', async (req, res, next) => {
  try {
    const newLivro = await prisma.post.create({
      data: {
        ISBN: req.body.ISBN,
        titulo: req.body.titulo,
        Categoria: req.body.Categoria,
        Autor: req.body.Autor,
      },
    });
    res.status(201).json(newLivro);
  } catch (error) {
    next(error);
  }
});

// Obter lista de livros
app.get('/Livros', async (req, res, next) => {
  try {
    const livros = await prisma.post.findMany();
    res.status(200).json(livros);
  } catch (error) {
    next(error);
  }
});

// Atualizar livro
app.put('/Livros/:ISBN', async (req, res, next) => {
  try {
    const updatedLivro = await prisma.post.update({
      where: {
        ISBN: req.params.ISBN,
      },
      data: {
        ISBN: req.body.ISBN,
        titulo: req.body.titulo,
        Categoria: req.body.Categoria,
        Autor: req.body.Autor,
      },
    });
    res.status(200).json(updatedLivro);
  } catch (error) {
    next(error);
  }
});

// Excluir livro
app.delete('/Livros/:ISBN', async (req, res, next) => {
  try {
    await prisma.post.delete({
      where: {
        ISBN: req.params.ISBN,
      },
    });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));