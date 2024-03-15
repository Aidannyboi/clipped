import { Router } from "express";
import { createGame, deleteGame, getAllGame, getOneGame, updateOneGame } from "../controllers/game.controller.js";

const router = Router();

router.route("/games")
    .get(getAllGame)
    .post(createGame)

router.route("/game/:id")
    .get(getOneGame)
    .put(updateOneGame)
    .delete(deleteGame)

export default router