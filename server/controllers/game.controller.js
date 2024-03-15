import Game from "../models/game.model.js";

async function createGame (req, res) {
    try{
        const newGame = await Game.create(req.body);

        res.json(newGame);
    } catch(error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getAllGame (req, res) {
    try{
        const allGames = await Game.find();

        res.json(allGames)
    } catch (error){

        console.log(error);
        res.status(400).json(error);
    }

}

async function getOneGame (req, res) {
    try{
        const oneGame = await Game.findById(req.params.id);

        res.json(oneGame)
    } catch (error){

        console.log(error);
        res.status(400).json(error);
    }
}

async function updateOneGame (req, res) {
    const options = {
        new: true,

        runValidators: true
    }
    try{
        const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedGame)
    } catch(error) {
        res.status(400).json(error);
    }
}

async function deleteGame (req, res) {
    try{
        const deletedGame = await Game.findByIdAndDelete(req.params.id)

        res.json(deletedGame)
    } catch(error){
        console.log(error)
        res.status(400).json(error)
    }
}

export {createGame, getAllGame, getOneGame, updateOneGame, deleteGame}