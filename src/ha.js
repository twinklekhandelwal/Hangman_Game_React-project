import React, { Component } from "react";
import "./index.css";
import image0 from "./images/0.jpg";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";

const items = ["banana", "apple", "orange", "papaya"];
const images = [image0, image1, image2, image3, image4, image5, image6];
const newGuessWord = () => items[Math.floor(Math.random() * items.length)];
var alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

class HangmanImage extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  handleAplhabetClick = alphabet => {
    if (this.state.lifes >= 6) {
      return;
    }
    this.setState(prevState => ({
      alreadySelectedAlphabets: prevState.alreadySelectedAlphabets + alphabet,
      lifes: decreaseLifeIfGuessIsWrong(
        prevState.secretWord,
        alphabet,
        prevState
      )
    }));
  };

  handleReset = () => {
    this.setState(getInitialState());
  };

  render() {
    
    const secretWordLetterList = this.state.secretWord.split("");
    return (
      <div>
        Guesses Left : {this.state.lifes}
        <div className="center">''
          <img
            src={images[this.nextImageToBeShown()]}
            className="image_cenrer"
            alt="image1"
          />
          <p className="text">Guess the Word?</p>
          {secretWordLetterList.map(alphabet =>
            this.state.alreadySelectedAlphabets.includes(alphabet) ? (
              <span> {alphabet} </span>
            ) : (
              <span> _ </span>
            )
          )}
        </div>
        <div id="button_set">
          {this.state.lifes === 6
            ? null
            : alphabets.map(alphabet => (
                <button
                  onClick={() => this.handleAplhabetClick(alphabet)}
                  className="set_alphabate"
                  disabled={this.state.alreadySelectedAlphabets.includes(
                    alphabet
                  )}
                >
                  {alphabet}
                </button>
              ))}

          <br />
          <button onClick={this.handleReset} className="set_alphabate buttons">
            reset
          </button>
        </div>
      </div>
    );
  }

  nextImageToBeShown() {
    return  this.state.lifes;
  }
}
export default HangmanImage;

function getInitialState() {
  return {
    lifes: 0,
    secretWord: newGuessWord(),
    alreadySelectedAlphabets: ""
  };
}

function decreaseLifeIfGuessIsWrong(secretWord, secretLetter, prevState) {
  return secretWord.includes(secretLetter)
    ? prevState.lifes
    : prevState.lifes +1;
}