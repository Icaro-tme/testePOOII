import { Request, Response } from 'express';
import { LanceService } from '../services/lanceService';

export class LanceController {
  private lanceService: LanceService;

  constructor() {
    this.lanceService = new LanceService();
  }

  public getAllLances = async (req: Request, res: Response) => {
    try {
      const lances = await this.lanceService.getAllLances();
      res.json(lances);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar lances' });
    }
  };

  public getLanceById = async (req: Request, res: Response) => {
    const lanceId = parseInt(req.params.id);

    try {
      const lance = await this.lanceService.getLanceById(lanceId);
      if (lance) {
        res.json(lance);
      } else {
        res.status(404).json({ error: 'Lance não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar lance' });
    }
  };

  public createLance = async (req: Request, res: Response) => {
    const { compradorId, leilaoId, valor } = req.body;

    try {
      const lance = await this.lanceService.createLance({ compradorId, leilaoId, valor });
      res.status(200).json(lance);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar lance' });
    }
  };

  public deleteLance = async (req: Request, res: Response) => {
    const lanceId = parseInt(req.params.id);

    try {
      const lance = await this.lanceService.deleteLance(lanceId);
      
      if (lance) {
        res.json(lance);
      } else {
        res.status(404).json({ error: 'Lance não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao deletar lance:', error);
      res.status(500).json({ error: 'Erro ao deletar lance' });
    }
  };

  public updateLance = async (req: Request, res: Response) => {
    const lanceId = parseInt(req.params.id);
    const { compradorId, leilaoId, valor } = req.body;

    try {
      const lance = await this.lanceService.updateLance(lanceId, { compradorId, leilaoId, valor });
      if (lance) {
        res.json(lance);
      } else {
        res.status(404).json({ error: 'Lance não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar lance' });
    }
  };
}
