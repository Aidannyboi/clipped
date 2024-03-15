import { useState } from "react";

import axios from "axios";

import { Link, useNavigate } from "react-router-dom";


const GameForm = () => {

    const [GameName, SetGameName] = useState("");
    const [GameNameError, SetGameNameError] = useState("");

    const [GameDescription, SetGameDescription] = useState("");
    const [GameDescriptionError, SetGameDescriptionError] = useState("");

    const [GameDevelopers, SetGameDevelopers] = useState("");
    const [GameDevelopersError, SetGameDevelopersError] = useState("");

    const [GameImage, SetGameImage] = useState("");
    const [GameImageError, SetGameImageError] = useState("");

    const navigate = useNavigate();

    const handleGameName = (e) => {
        SetGameName(e.target.value)

        if(e.target.value.length < 1){

            SetGameNameError("A game needs to have a name you know?")

        }else if(e.target.value.length > 225){

            SetGameNameError("Woah friend, that is way to many characters, lets stay under 225 characters.")
            
        }else{
            SetGameNameError("")
        }
    }

    const handleGameDescription = (e) => {
        SetGameDescription(e.target.value)

        if(e.target.value.length < 1){

            SetGameDescriptionError("Tell us about your game! it has to explained for others to understand it!")

        }else if(e.target.value.length < 10){

            SetGameDescriptionError("Lets get creative! Use at lest 10 or more characters please!")
            
        }else if(e.target.value.length > 225){

            SetGameDescriptionError("That seems like a little to much. lets keep it under 225 characters.")
            
        }else{
            SetGameDescriptionError("")
        }
        
    }

    const handleGameDevelopers = (e) => {
        SetGameDevelopers(e.target.value)

        if(e.target.value.length < 1){

            SetGameDevelopersError("The game has to have been made by someone! Tell us who made it!")

        }else if(e.target.value.length > 255){

            SetGameDevelopersError("That seems like a little to much. lets keep it under 225 characters.")
            
        }else{
            SetGameDescriptionError("")
        }
    }

    const handleGameImage = (e) => {
        SetGameImage(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:9999/api/games', {
            GameName,
            GameDescription,
            GameDevelopers,
            GameImage
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            navigate("/games")
        }).catch(console.log(error))
    }

    return (
        <>

            <div>
                <form onSubmit={submitHandler}>
                    <label>Game name:</label>
                    <p>{GameNameError}</p>
                    <input type="text" onChange={handleGameName} value={GameName}/>

                    <label>Game Description:</label>
                    <p>{GameDescriptionError}</p>
                    <input type="text" onChange={handleGameDescription} value={GameDescription} />

                    <label>Game developers:</label>
                    <p>{GameDevelopersError}</p>
                    <input type="text" onChange={handleGameDevelopers} value={GameDevelopers}/>

                    <label>Game Image:</label>
                    <input type="file" onChange={handleGameImage} value={GameImage}/>

                    <button> Submit Game</button>
                </form>
            </div>
        </>
    )
}

export default GameForm