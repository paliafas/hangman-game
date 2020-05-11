import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WordLetter extends Component {
    render() {
        return this.generateElement();
    }

    generateElement = () => {
        if (this.props.isKnown) {
            return (
                <div className="word-letter">
                    <span style={{ fontSize: this.calculateFontSize() }}>
                        {this.props.letter}
                    </span>
                </div>
            );
        } else {
            return (
                <div className="word-letter word-letter-unknown">
                    <span style={{ fontSize: this.calculateFontSize() }}>
                        &nbsp;
                    </span>
                </div>
            );
        }
    };

    calculateFontSize = () => {
        const wordLength = this.props.wordLength;
        const size = (1 / wordLength) * 20;

        if (size > 3.5) return 3.5 + 'rem';
        else {
            return size + 'rem';
        }
    };
}

WordLetter.propTypes = {
    letter: PropTypes.string.isRequired,
    isKnown: PropTypes.bool.isRequired,
    wordLength: PropTypes.number.isRequired
};

export default WordLetter;
