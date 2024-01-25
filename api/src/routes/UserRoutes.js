const { Router } = require("express");
const { User, Accesses } = require("../db.js");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const Users = await User.findAll({
      include: [
        {
          model: Accesses,
          as: "Accessos",
        },
      ],
    });
    res.status(200).json(Users);
  } catch (error) {
    console.log(error);
    res.status(error.status).json(error.message);
  }
});

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const Users = await User.findByPk({
        where: { id: id },
        include: [
          {
            model: Accesses,
            as: "Accessos",
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
  const { name, email, adress, phone, tributaryKey } = req.body;
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
  const { id, name, dni, phone, adress, mail } = req.body;
  const User = await User.findByPk(id);
  if (!User) {
    res.status(404).json({ message: "No existe ese Usere." });
  } else {
    try {
      name && (User.name = name.toUpperCase());
      dni && (User.dni = dni)
      phone && (User.phone = phone);
      adress && (User.adress = adress.toUpperCase());
      mail && (User.mail = mail);
      await User.save();
      res.status(200).json({ User, status: "Actualizado correctamente" });
    } catch (error) {
      res.status(error.statusCode).json(error.message);
    }
  }
});

module.exports = router;
