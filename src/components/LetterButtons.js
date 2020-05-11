import React, { Component } from 'react';
import LetterButton from './LetterButton';
import PropTypes from 'prop-types';

class LetterButtons extends Component {
    render() {
        return (
            <section className="letter-buttons">
                {this.getLetterButtons()}
            </section>
        );
    }

    getLetterButtons = () => {
        var letterButtons = [];

        for (var i = 0; i < 26; i++) {
            var letter = String.fromCharCode(97 + i);

            letterButtons.push(
                <LetterButton
                    selectLetter={this.props.selectLetter}
                    letter={letter}
                    isUsed={this.props.guessedLetters.includes(letter)}
                />
            );
        }

        return letterButtons;
    };
}

LetterButtons.propTypes = {
    selectLetter: PropTypes.func.isRequired,
    guessedLetters: PropTypes.array.isRequired
};

export default LetterButtons;
