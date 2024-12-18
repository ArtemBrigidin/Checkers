import EnemyCemetry from "./Game/EnemyCemetry";
import Board from "./Game/Board";
import PlayerCemetry from "./Game/PlayerCemetry";
import "./Game.css";

function Game({GameModel}){
    return <div className="Game">
        <EnemyCemetry/>
        <Board GameModel={GameModel}/>
        <PlayerCemetry/>
    </div>;
}
export default Game;