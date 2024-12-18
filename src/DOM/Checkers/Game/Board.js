import "./Board.css";
import BackgroundCellGenerator from "./Board/BackgroundCellGenerator";
import GameModelCheckerGenerator from "./Board/GameModelCheckerGenerator";

function Board({GameModel}) {
    return <div className="Board">
        <GameModelCheckerGenerator GameModel={GameModel} />
        <BackgroundCellGenerator/>

        <div style={{gridColumn: 4, gridRow: 4}}></div>
        <div style={{gridColumn: 2, gridRow: 2}}></div>
        <div style={{gridColumn: 6, gridRow: 6}}></div>

    </div>
}

export default Board;