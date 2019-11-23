import React, { Component } from 'react';
import './index.css';
import image1 from './images/0.jpg';
import image2 from './images/1.jpg';
import image3 from './images/2.jpg';
import image4 from './images/3.jpg';
import image5 from './images/4.jpg';
import image6 from './images/5.jpg';
import image7 from './images/6.jpg';

const list_Items = ['Banana', 'Apple', 'Orange', 'Papaya',"Mango","Guava","Grapes","Watermelon"];
const hangman_Image=[image1,image2,image3,image4,image5,image6,image7]

let gusse_word =() => list_Items[Math.floor(Math.random() *  list_Items.length)];
console.log(gusse_word);
var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
// var word = alphabets.split('');

// console.log(gusse)

class HangmanImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			letter: '',lives:hangman_Image.length-1,
			secretWord: gusse_word(),
			
			
		};
	}

	handle = alphabet => {
		
		this.setState( prevState => ({ letter: prevState.letter + alphabet,
			lives:this.state.secretWord.includes(alphabet) ? prevState.lives: prevState.lives - 1
		}));
		
		 const word = this.state.secretWord.replace(/alphabet/g, '');
		console.log(word)
		console.log(alphabet)
		
	}
	

	handleButtonClick = () => {
		this.setState({letter: '',lives:hangman_Image.length-1,secretWord: gusse_word(),})
	};
	
		render() {
			
		// const {gusse_word, letter} = this.state;
		const word_cheak =this.state.secretWord.replace(new RegExp('[^' + this.state.letter + ']', 'g'), '-');
		// console.log(this.state.gWord, "PJ")
		return (
			<div>
				<h1>Guess word:{this.state.lives}</h1>
				
				<div className="center">
				
					<img src={ hangman_Image[ hangman_Image.length-this.state.lives-1]} className="image_cenrer" alt="image1" />
					<p className="text">Guess the Programming Language ?</p>
					

					{/* {random_word .map(alphabet=> (  */}
						<span>{word_cheak}</span>
						
					 {/* ))} */}
				
				</div>
				<div id="button_set">
				{this.state.lives===0?<h1>you lost{this.state.secretWord}</h1>:
					alphabets.map(selected_Alphabet => (
						<button
							onClick={() => this.handle(selected_Alphabet)}
							className="set_alphabate"
							disabled={this.state.letter.includes(selected_Alphabet)}>
							{selected_Alphabet}
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
// function decreaseLifeIfGuessIsWrong(alphabet,prevState,gusse_word) {
// 	return 
export default HangmanImage;
