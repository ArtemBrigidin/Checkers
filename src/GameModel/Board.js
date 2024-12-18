import Checker from "./Checker";

class Board {
    _checkers = []

    constructor(board) {
        //black
        //1
        this._checkers.push( new Checker("black",1,2))
        this._checkers.push( new Checker("black",1,4))
        this._checkers.push( new Checker("black",1,6))
        this._checkers.push( new Checker("black",1,8))
        //2
        this._checkers.push( new Checker("black",2,1))
        this._checkers.push( new Checker("black",2,3))
        this._checkers.push( new Checker("black",2,5))
        this._checkers.push( new Checker("black",2,7))
        //3
        this._checkers.push( new Checker("black",3,2))
        this._checkers.push( new Checker("black",3,4))
        this._checkers.push( new Checker("black",3,6))
        this._checkers.push( new Checker("black",3,8))

        //white
        //1
        this._checkers.push( new Checker("white",6,1))
        this._checkers.push( new Checker("white",6,3))
        this._checkers.push( new Checker("white",6,5))
        this._checkers.push( new Checker("white",6,7))
        //2
        this._checkers.push( new Checker("white",7,2))
        this._checkers.push( new Checker("white",7,4))
        this._checkers.push( new Checker("white",7,6))
        this._checkers.push( new Checker("white",7,8))
        //3
        this._checkers.push( new Checker("white",8,1))
        this._checkers.push( new Checker("white",8,3))
        this._checkers.push( new Checker("white",8,5))
        this._checkers.push( new Checker("white",8,7))
    }
}
export default Board;