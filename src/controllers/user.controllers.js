const catchError = require("../utils/catchError");
const NombreModelo = require("../models/User");
const User = require("../models/User");

const getAll = catchError(async (req, res) => {
  // Operaciones...
  const result = await User.findAll();
  return res.status(200).json(result);
});

const createUser = catchError(async (req, res) => {
  const result = await User.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await User.findByPk(id);
  if (!result) return res.status(404).json({ message: "User not found" });
  return res.status(200).json(result);
});

const deleteUser = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await User.destroy({ where: { id } });
  if (!result) return res.status(404).json({ message: "User not found" });
  return res.sendStatus(204);
});

const updateUsers = catchError(async (req, res) => {
  const { id } = req.params;

  const result = await User.findByPk(id);
  if (!result) return res.status(404).json({ message: "User not found" });

  const resultUpdate = await result.update(req.body);
  return res.status(200).json(resultUpdate);
});

module.exports = {
  getAll,
  createUser,
  getOne,
  deleteUser,
  updateUsers,
};
