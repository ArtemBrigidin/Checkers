import React from "react";
class Checker{
    _row
    _column
    _color

    /**
     * @param color выбирает цвет шашки
     * @param row строчка на поле
     *  @param column колонка на поле
     */
    constructor(color, row, column) {
        this._color = color
        this._row = row
        this._column = column
    }
}

export default Checker;