import React, { Component } from 'react';
import './index.css';
import image1 from './images/0.jpg';
import image2 from './images/1.jpg';
import image3 from './images/2.jpg';
import image4 from './images/3.jpg';
import image5 from './images/4.jpg';
import image6 from './images/5.jpg';
import image7 from './images/6.jpg';

const items = ['banana', 'apple', 'orange', 'pyaya'];
const image=[image1,image2,image3,image4,image5,image6,image7]

const gusse_word = items[Math.floor(Math.random() * items.length)];
console.log(gusse_word);
var random_word = gusse_word.split('');
var words = 'abcdefghijklmnopqrstuvwxyz';
var word = words.split('');

// console.log(gusse)

class HangmanImage extends Component {
	constructor(props) {
		super(props);
		this.state = { letter: '', lives:image.length-1};
	}

	handle = alphabet => {
		this.setState(prevState => ({ letter: prevState.letter + alphabet  }));
		// console.log(this.state.lives)
		gusse_word.includes(this.state.letter)
		
	};

	handleButtonClick = () => {
		this.setState({show:true})
	};

	render() {
		// const {gusse_word, letter} = this.state;
		const word_cheak = gusse_word.replace(new RegExp('[^' + this.state.letter + ']', 'g'), '-');
		;
		return (
			<div>
				<h1>Guess word:{this.state.lives}</h1>
				
				<div className="center">
				
					<img src={image[image.length-this.state.lives-1]} className="image_cenrer" alt="image1" />
					<p className="text">Guess the Programming Language ?</p>
					

					{/* {random_word .map(alphabet=> (  */}
						<span>{word_cheak}</span>
						
					 {/* ))} */}
				
				</div>
				<div id="button_set">
					{word.map(alphabet => (
						<button
							onClick={() => this.handle(alphabet)}
							className="set_alphabate"
							disabled={this.state.letter.includes(alphabet)}>
							{alphabet}
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
