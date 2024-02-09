const { Router } = require("express");
const { User, Access } = require("../db.js");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const Accesses = await Access.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(Accesses);
  } catch (error) {
    console.log(error);
    res.status(error.status).json(error.message);
  }
});

router.post("/", async (req, res, next) => {
  const { userId } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const newAccess = await Access.create();
    await user.addAccess(newAccess);

    res.status(200).json({fecha: newAccess.createdAt, usuario: user.name});
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const access = await Access.findByPk(id);
    if (!access) {
      res.status(404).json("Acceso no encontrado");
    } else {
      await access.destroy();
      res.status(200).json("Acceso eliminado correctamente");
    }
  } catch (error) {
    res.status(error.status).json("No se pudo eliminar el Acceso");
  }
});

module.exports = router;
