const { Router } = require("express");
const { User, Access } = require("../db.js");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const Users = await User.findAll(
    //   {
    //   include: [
    //     {
    //       model: Accesses,
    //       as: "Accessos",
    //     },
    //   ],
    // }
    );
    res.status(200).json(Users);
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
});

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const Users = await User.findByPk({
        where: { id: id },
        include: [
          {
            model: Access,
          },
        ],
      });
      res.status(200).json(Users);
    } catch (error) {
      console.log(error);
      res.status(error.status).json(error.message);
    }
  });

router.post("/", async (req, res, next) => {
  const { name, mail, dni, adress, phone } = req.body;
  try {
    const newUser = {
      name: name.toUpperCase(),
      dni,
      phone,
      adress: adress.toUpperCase(),
      mail,
    };
    await User.create(newUser);
    res.status(200).send(`Usuario ${newUser.name} creado con éxito.`);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params
  const { name, dni, phone, adress, mail } = req.body;
  const user = await User.findByPk(id);
  if (!user) {
    res.status(404).json({ message: "No existe ese Usuario." });
  } else {
    try {
      name && (user.name = name.toUpperCase());
      dni && (user.dni = dni)
      phone && (user.phone = phone);
      adress && (user.adress = adress.toUpperCase());
      mail && (user.mail = mail);
      await user.save();
      res.status(200).json({ user, status: "Actualizado correctamente" });
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json("Usuario no encontrado");
    } else {
      await user.destroy();
      res.status(200).json("Usuario eliminado correctamente");
    }
  } catch (error) {
    res.status(error.status).json("No se pudo eliminar el producto");
  }
});

module.exports = router;
