import React from 'react';
import PropTypes from 'prop-types';
import WordLetter from './WordLetter';

const WordLetters = ({ word, guessedLetters }) => (
    <section className="word-letters">
        {word.split('').map((letter) => (
            <WordLetter
                letter={letter}
                isKnown={guessedLetters.includes(letter)}
                wordLength={word.length}
            />
        ))}
    </section>
);

WordLetters.propTypes = {
    word: PropTypes.string.isRequired,
    guessedLetters: PropTypes.array.isRequired,
};

export default WordLetters;
