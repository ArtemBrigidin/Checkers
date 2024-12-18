import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Checkers from "./DOM/Checkers";
import reportWebVitals from './reportWebVitals';
import GameModel from "./GameModel/GameModel";

const gameModel = new GameModel();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Checkers GameModel={gameModel} />
    </React.StrictMode>
);

reportWebVitals();
