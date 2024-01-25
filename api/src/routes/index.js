const { Router } = require('express');

const userRoutes = require('./UserRoutes.js')
const accessRoutes = require('./accessRoutes.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/user', userRoutes)
router.use('/access', accessRoutes)


module.exports = router;
