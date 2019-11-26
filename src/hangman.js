import React, { Component } from 'react';
import './index.css';
import image1 from './images/0.jpg';
import image2 from './images/1.jpg';
import image3 from './images/2.jpg';
import image4 from './images/3.jpg';
import image5 from './images/4.jpg';
import image6 from './images/5.jpg';
import image7 from './images/6.jpg';

const list_Items = ['banana', 'apple', 'orange', 'papaya', 'mango', 'guava', 'grapes', 'watermelon'];
const hangman_Image = [image1, image2, image3, image4, image5, image6, image7];

let gusse_word = () => list_Items[Math.floor(Math.random() * list_Items.length)];

var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

class HangmanImage extends Component {
	constructor(props) {
		super(props);
		var leftGuessWord = gusse_word();
		this.state = {
			letter: '',

			lives: hangman_Image.length - 1,
			secretWord: leftGuessWord,
			filteredWord: leftGuessWord,
		};
	}

	handle = selected_Alphabet => {
		this.setState(prevState => ({
			letter: prevState.letter + selected_Alphabet,
			lives: this.state.secretWord.includes(selected_Alphabet) ? prevState.lives : prevState.lives - 1,
			filteredWord: word,
			guessWordLength: word.length,
		}));

		const word = this.state.filteredWord.replace(new RegExp(selected_Alphabet, 'g'), '');
	};

	handleButtonClick = () => {
		var leftGuessWord = gusse_word();
		this.setState({
			letter: '',
			lives: hangman_Image.length - 1,
			secretWord: leftGuessWord,
			filteredWord: leftGuessWord,
			guessWordLength: leftGuessWord.length
		});
	};

	render() {
		const word_cheak = this.state.secretWord.replace(new RegExp('[^' + this.state.letter + ']', 'g'), '-');

		return (
			<div>
				<h1 className="guess_word">Guess word:{this.state.lives}</h1>

				<div className="center">
					<img
						src={hangman_Image[hangman_Image.length - this.state.lives - 1]}
						className="image_cenrer"
						alt="image1"/>
					
					<h2 className="text">Guess the Fruits Name ?</h2>

					{this.state.lives === 0 ? <span>{this.state.secretWord}</span> : <span>{word_cheak}</span>}
				</div>

				<div id="button_set">
					{this.state.lives === 0 ? <h1 className="lost">you lost</h1> : null}
					{this.state.guessWordLength === 0 ? <h1 className="won">you won</h1> : null}
					{this.state.lives === 0 || this.state.guessWordLength === 0
						? null
						: alphabets.map(selected_Alphabet => (
								<button
									onClick={() => this.handle(selected_Alphabet)}
									className="set_alphabate"
									disabled={this.state.letter.includes(selected_Alphabet)}>
									{selected_Alphabet}
									{/* {this.state.lives===2?<p>you lt</p>:null} */}
								</button>
						  ))}

					<br />

					<button onClick={this.handleButtonClick} className="set_alphabate buttons">
						reset
					</button>
				</div>
			</div>
		);
	}
}

export default HangmanImage;
