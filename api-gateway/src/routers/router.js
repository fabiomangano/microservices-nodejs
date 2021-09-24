import express from 'express';
import movieService from './movieService';
import assetsService from './assetsService';
import authService from './authService';
import ticketService from './ticketService';

const router = express.Router();

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next();
})

router.use(movieService);
router.use(assetsService);
router.use(authService);
router.use(ticketService);

export default router;