import React from 'react';
import './App.css';
import LoadingIndicator from './components/LoadingIndicator';
import WordLetters from './components/WordLetters';
import LetterButtons from './components/LetterButtons';
import Lives from './components/Lives';
import GameOver from './components/GameOver';
import GameVictory from './components/GameVictory';
import MainFooter from './components/MainFooter';
import { getRandomLetter } from './Utility';

class App extends React.Component {
    state = {
        word: '',
        guessedLetters: [],
        lives: 6,
    };

    componentDidMount() {
        this.resetGame();
    }

    render() {
        return this.state.word === '' ? (
            <div id="main-wrapper">
                <LoadingIndicator />
            </div>
        ) : (
            <div id="main-wrapper">
                <section id="game-area">
                    <div className="container">
                        <div className="game-area-content">
                            <div id="game-display-area">
                                <Lives lives={this.state.lives} />
                                <WordLetters
                                    word={this.state.word}
                                    guessedLetters={this.state.guessedLetters}
                                />
                            </div>
                            {this.displayInteractionArea()}
                        </div>
                    </div>
                </section>
                <MainFooter />
            </div>
        );
    }

    resetGame = () => {
        const endpoint = 'https://api.datamuse.com/words';
        const maxWordCountQuery = 'max=' + 10;
        const wordQuery = 'sp=' + getRandomLetter() + '*';
        const apiUrl = endpoint + '?' + wordQuery + '&' + maxWordCountQuery;
        var randomIndex = Math.floor(Math.random() * 10);

        fetch(apiUrl)
            .then((response) => response.json())
            .then((jsonData) => {
                this.setState({
                    word: jsonData[randomIndex].word,
                    guessedLetters: [],
                    lives: 6,
                });
            });
    };

    selectLetter = (letter) => {
        var guessedLetters = this.state.guessedLetters;
        var lives = this.state.lives;

        guessedLetters.push(letter);

        if (!this.state.word.includes(letter)) {
            lives--;
        }

        this.setState({
            word: this.state.word,
            guessedLetters: guessedLetters,
            lives: lives,
        });
    };

    displayInteractionArea = () => {
        var correctLetters = 0;
        var uniqueLetters = Array.from(new Set(this.state.word.split('')));

        this.state.guessedLetters.forEach((letter) => {
            if (uniqueLetters.includes(letter)) {
                correctLetters++;
            }
        });

        if (this.state.lives > 0) {
            if (correctLetters === uniqueLetters.length) {
                return (
                    <section id="interaction-area">
                        <GameVictory resetGame={this.resetGame} />
                    </section>
                );
            } else {
                return (
                    <section id="interaction-area">
                        <LetterButtons
                            selectLetter={this.selectLetter}
                            guessedLetters={this.state.guessedLetters}
                        />
                    </section>
                );
            }
        } else {
            return (
                <section id="interaction-area">
                    <GameOver resetGame={this.resetGame} />
                </section>
            );
        }
    };
}

export default App;
