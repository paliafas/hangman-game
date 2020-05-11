import React from 'react';
import PropTypes from 'prop-types';

const GameOver = ({ resetGame }) => (
    <section className="game-end">
        <p>You lost!</p>
        <button onClick={resetGame} className="button happy-button">
            Play Again
        </button>
    </section>
);

GameOver.propTypes = {
    resetGame: PropTypes.func.isRequired,
};

export default GameOver;
