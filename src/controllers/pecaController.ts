import { Request, Response } from 'express';
import prisma from '../services/prisma';

export const listarPecas = async (req: Request, res: Response) => {
  try {
    const pecas = await prisma.peca.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    return res.json(pecas);
  } catch (error) {
    console.error('Erro ao listar peças:', error);
    return res.status(500).json({ erro: 'Erro ao listar peças' });
  }
};

export const buscarPeca = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const peca = await prisma.peca.findUnique({
      where: { id }
    });
    
    if (!peca) {
      return res.status(404).json({ erro: 'Peça não encontrada' });
    }
    
    return res.json(peca);
  } catch (error) {
    console.error('Erro ao buscar peça:', error);
    return res.status(500).json({ erro: 'Erro ao buscar peça' });
  }
};

export const criarPeca = async (req: Request, res: Response) => {
  try {
    const { nome, categoria, quantidade, status, descricao } = req.body;
    
    // Validação básica
    if (!nome || !categoria || quantidade === undefined || !status) {
      return res.status(400).json({ erro: 'Campos obrigatórios faltando' });
    }
    
    const peca = await prisma.peca.create({
      data: {
        nome,
        categoria,
        quantidade: parseInt(quantidade),
        status,
        descricao: descricao || null
      }
    });
    
    return res.status(201).json(peca);
  } catch (error) {
    console.error('Erro ao criar peça:', error);
    return res.status(500).json({ erro: 'Erro ao criar peça' });
  }
};

export const atualizarPeca = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nome, categoria, quantidade, status, descricao } = req.body;
    
    const pecaAtualizada = await prisma.peca.update({
      where: { id },
      data: {
        nome,
        categoria,
        quantidade: parseInt(quantidade),
        status,
        descricao: descricao || null
      }
    });
    
    return res.json(pecaAtualizada);
  } catch (error) {
    console.error('Erro ao atualizar peça:', error);
    return res.status(500).json({ erro: 'Erro ao atualizar peça' });
  }
};

export const deletarPeca = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    await prisma.peca.delete({
      where: { id }
    });
    
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar peça:', error);
    return res.status(500).json({ erro: 'Erro ao deletar peça' });
  }
};
