import { Request, Response } from "express";
import Usuarios from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuarios.findAll();
  res.json({ usuarios });
};

export const getUsuario = async (req: Request, res: Response) => {
  // const usuarios = await Usuarios.findOne({ where: { id: req.params.id } });
  const { id } = req.params;
  const usuario = await Usuarios.findByPk(id);
  if (!usuario)
    return res.status(404).json({ msg: `No existe usuario con id ${id}` });
  res.json(usuario);
};

export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const existeEmail = await Usuarios.findOne({
      where: { email: body.email },
    });

    if (existeEmail) {
      return res.status(400).json({ msg: "Ya existe ese email" });
    }

    const usuario = await Usuarios.build(body);
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "Server caido, hable con el administrador" });
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ msg: "No existe ese id" + id });
    }

    await usuario.update(body);
    res.json(usuario);
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "Server caido, hable con el administrador" });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const usuario = await Usuarios.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ msg: "No existe ese id" + id });
    }

    await usuario.destroy();
    res.json(usuario);
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "Server caido, hable con el administrador" });
  }
};
