import React, { Component } from 'react';
import './index.css';
import image1 from './images/0.jpg';
import image2 from './images/1.jpg';
import image3 from './images/2.jpg';
import image4 from './images/3.jpg';
import image5 from './images/4.jpg';
import image6 from './images/5.jpg';
import imag7 from './images/6.jpg'; 

      
class hangmanImage extends Component{
     
    render(){
        var word="abcdefghijklmnopqrstuvwxyz";
        var y = word.split("");  
    
        
    return(<div>
    
    <img src={image1} className="image_cenrer"/> 
    <p className="text">Guess the Programming Language ?</p>
    {/* <p>{words}</p> */}
    <div className="button_set">
    
    {y.map(x=><button className="set_alphabate ">{x}</button>)};
    <br/>
    <button className="set_alphabate buttons">reset</button>
     </div>
     
    
    </div>)
    }
}
export default hangmanImage;