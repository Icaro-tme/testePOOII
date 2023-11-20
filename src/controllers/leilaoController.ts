import { Request, Response } from 'express';
import { LeilaoService } from '../services/leilaoService';

export class LeilaoController {
  private leilaoService: LeilaoService;

  constructor() {
    this.leilaoService = new LeilaoService();
  }

  public getAllLeiloes = async (req: Request, res: Response) => {
    try {
      const leiloes = await this.leilaoService.getAllLeiloes();
      res.json(leiloes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar leilões' });
    }
  };

  public getLeilaoById = async (req: Request, res: Response) => {
    const leilaoId = parseInt(req.params.id);

    try {
      const leilao = await this.leilaoService.getLeilaoById(leilaoId);
      if (leilao) {
        res.json(leilao);
      } else {
        res.status(404).json({ error: 'Leilão não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar leilão' });
    }
  };

  public createLeilao = async (req: Request, res: Response) => {
    const { produto, preco, data, donoId } = req.body;

    try {
      const leilao = await this.leilaoService.createLeilao({ produto, preco, data, donoId });
      res.status(201).json(leilao);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar leilão' });
    }
  };

  public deleteLeilao = async (req: Request, res: Response) => {
    const leilaoId = parseInt(req.params.id);

    try {
      const leilao = await this.leilaoService.deleteLeilao(leilaoId);
      
      if (leilao) {
        res.json(leilao);
      } else {
        res.status(404).json({ error: 'Leilão não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao deletar leilão:', error);
      res.status(500).json({ error: 'Erro ao deletar leilão' });
    }
  };

  public updateLeilao = async (req: Request, res: Response) => {
    const leilaoId = parseInt(req.params.id);
    const { produto, preco, data, donoId } = req.body;

    try {
      const leilao = await this.leilaoService.updateLeilao(leilaoId, { produto, preco, data, donoId });
      if (leilao) {
        res.json(leilao);
      } else {
        res.status(404).json({ error: 'Leilão não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar leilão' });
    }
  };
}
