import React from 'react';
import PropTypes from 'prop-types';

const GameVictory = ({ resetGame }) => (
    <section className="game-end">
        <p>You won!</p>
        <button onClick={resetGame} className="button happy-button">
            Play Again
        </button>
    </section>
);

GameVictory.propTypes = {
    resetGame: PropTypes.func.isRequired,
};

export default GameVictory;
