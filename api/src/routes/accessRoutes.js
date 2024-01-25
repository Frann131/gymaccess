const { Router } = require("express");
const { User, Access } = require("../db.js");

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const Accesses = await Access.findAll({
      include: [
        {
          model: User,
          as: "Usuario",
          attributes: ['name'],
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
  const { date } = req.body;
  try {
    const newAccess = {
      date: date,
    };
    await Access.create(newAccess);
    res.status(200).send(`${newAccess}`);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
