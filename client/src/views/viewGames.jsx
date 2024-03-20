import GetGames from "../components/getGames";

import { Link } from "react-router-dom";


const ViewGames = () => {

    return(
        <>
            <div className="HeaderStyle">
                <h1 style={{color: "green"}}>
                    Clipped
                </h1>
                <div>
                    <Link to={'/games/create'}><button className="HeaderButton">Create Game</button></Link>
                </div>
            </div>
            <div className="BodyStyle">
            <GetGames/>
            </div>
        </>
    )
}

export default ViewGames