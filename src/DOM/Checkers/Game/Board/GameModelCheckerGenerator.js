import BlackChecker from "./BlackChecker";
import WhiteChecker from "./WhiteChecker";

/**
 * @param GameModel {GameModel}
 * @constructor
 */

function GameModelCheckerGenerator({GameModel}){
    let result = []
    let checkers = GameModel._board._checkers

    for (/**@var {Checker} checker*/const checker of checkers) {
        const row = checker._row
        const column = checker._column

        if (checker._color === "black")
        result.push(<BlackChecker key={`checker_${column}_${row}`} x={column} y={row} />)

        if (checker._color === "white")
            result.push(<WhiteChecker key={`checker_${column}_${row}`} x={column} y={row} />)
    }

    return result
}

export default GameModelCheckerGenerator;