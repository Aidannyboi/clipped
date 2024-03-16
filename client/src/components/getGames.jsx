import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetGames = () => {
    const [games, setGames] = useState([])

        useEffect(() => {
            axios.get("http://localhost:9999/api/games")
                .then((res) => {
                    console.log("Pulling all data")
                    console.log(res.data);
                    setGames(res.data);
                })
                .catch((err) => {
                    console.log(err)
                });
        }, [])

        return(
            games.map((game, index) => (
                <Link to={'/game/' + game._id + '/details'}>
                    <button className="gameBox">
                        <h1> {game.GameName} </h1>
                    </button>
                </Link>
            )).reverse()
        )
}

export default GetGames