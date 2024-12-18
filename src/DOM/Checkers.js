import EnemyInfo from "./Checkers/EnemyInfo.js";
import Game from "./Checkers/Game.js";
import PlayerInfo from "./Checkers/PlayerInfo.js";
import "./Checkerss.css";

function Checkers({GameModel}) {
    return <div className="Checkers">
        <EnemyInfo/>
        <Game GameModel={GameModel}/>
        <PlayerInfo/>
    </div>;
}
    export default Checkers;