import axios from "axios";

import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const GetOneGame = () => {

    const navigate = useNavigate();

    const [game, setGame] = useState([]);
    const {id} = useParams()

    const test = game.GameImage;

    const DeleteGame = () => {
        axios.delete("http://localhost:9999/api/game/" + id)
            .then((res) => {
                console.log(res.data);
                navigate("/games")
            })
    }

    useEffect(() => {
        axios.get("http://localhost:9999/api/game/" + id)
            .then((res) => {
                console.log(res.data);
                setGame(res.data);
                console.log(test)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <h1> {game.GameName} </h1>
            <h2>Created by: {game.GameDevelopers}</h2>
            <p>{game.GameDescription}</p>
            <img src={game.GameImage}/>
            <div>
                <button onClick={DeleteGame}>Delete Game</button>

                <Link to={'/game/' + game._id + '/update'}><button>Update Game</button></Link>
            </div>
        </>
    )
}

export default GetOneGame