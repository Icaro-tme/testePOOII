import { Request, Response } from 'express';
import { UsuarioService } from '../services/usuarioService';

export class UsuarioController {
  private usuarioService: UsuarioService;

  constructor() {
    this.usuarioService = new UsuarioService();
  }

  public getAllUsuarios = async (req: Request, res: Response) => {
    try {
      const usuarios = await this.usuarioService.getAllUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuarios' });
    }
  };

  public getUsuarioById = async (req: Request, res: Response) => {
    const usuarioId = parseInt(req.params.id);

    try {
      const usuario = await this.usuarioService.getUsuarioById(usuarioId);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ error: 'Usuario não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuario' });
    }
  };

  public createUsuario = async (req: Request, res: Response) => {
    const { nome, email } = req.body;

    try {
      const usuario = await this.usuarioService.createUsuario({ nome, email });
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuario' });
    }
  };

  public deleteUsuario = async (req: Request, res: Response) => {
    const usuarioId = parseInt(req.params.id);

    try {
      const usuario = await this.usuarioService.deleteUsuario(usuarioId);
      
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ error: 'Usuario não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao deletar usuario:', error);
      res.status(500).json({ error: 'Erro ao deletar usuario' });
    }
  };

  public updateUsuario = async (req: Request, res: Response) => {
    const usuarioId = parseInt(req.params.id);
    const { nome, email } = req.body;

    try {
      const usuario = await this.usuarioService.updateUsuario(usuarioId, { nome, email });
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ error: 'Usuario não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar usuario' });
    }
  };
}
