import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LetterButton extends Component {
    render() {
        return (
            <button
                onClick={this.props.selectLetter.bind(this, this.props.letter)}
                className={this.getClassNames()}
            >
                {this.props.letter}
            </button>
        );
    }

    onClick = () => {
        console.log(this.props.letter);
    };

    getClassNames = () => {
        if (this.props.isUsed) {
            return 'button letter-button-used';
        } else {
            return 'button';
        }
    };
}

LetterButton.propTypes = {
    letter: PropTypes.string.isRequired,
    selectLetter: PropTypes.func.isRequired,
    isUsed: PropTypes.bool.isRequired
};

export default LetterButton;
