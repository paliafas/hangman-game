import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hangman0 from '../assets/img/Hangman.svg';
import hangman1 from '../assets/img/Hangman1.svg';
import hangman2 from '../assets/img/Hangman2.svg';
import hangman3 from '../assets/img/Hangman3.svg';
import hangman4 from '../assets/img/Hangman4.svg';
import hangman5 from '../assets/img/Hangman5.svg';
import hangman6 from '../assets/img/Hangman6.svg';

class Lives extends Component {
    render() {
        return (
            <section className="lives">
                <img src={getHangmanGraphic(this.props.lives)} alt="" />
            </section>
        );
    }
}

function getHangmanGraphic(lives) {
    switch (lives) {
        case 6:
            return hangman0;
        case 5:
            return hangman1;
        case 4:
            return hangman2;
        case 3:
            return hangman3;
        case 2:
            return hangman4;
        case 1:
            return hangman5;
        case 0:
            return hangman6;
        default:
            return hangman0;
    }
}

Lives.propTypes = {
    lives: PropTypes.number.isRequired,
};

export default Lives;
