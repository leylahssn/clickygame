import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main"
 import images from "./images.json";
 import Card from "./components/Card"
 import Footer from "./components/Footer"
class App extends Component {
    
    state = {
      images,
      score:0,
      topScore:0,
      imgclicked:[]
    };
  
    

    reorganize=(element)=>{
       let array1=this.state.images;
         let images=[];
         let y =12;
         let z=Math.floor(Math.random() * y)
         for (let i = 0; i < 12; i++) {
             images[i]=array1[z];
             y--;
             array1.splice(z,1)
             z=Math.floor(Math.random() * y);
         }
       this.setState({images})
      return  element
    }
  
    selected=(id)=>{
        let imgId=this.reorganize(id);
        let score=this.state.score;
        let topScore=this.state.topScore;
        let imgclicked=this.state.imgclicked;
        let notExist=true;
        let currentTopScore=this.state.score;
      for (let i = 0; i < imgclicked.length; i++) {
        if (imgId==imgclicked[i]) {
          notExist=false;
if (currentTopScore>topScore) {
  topScore=currentTopScore;
  this.setState({topScore})
}
score=0;
imgclicked=[];
this.setState({score,imgclicked})

        }}
        if (notExist) {
          imgclicked.push(imgId);
          score++;
          this.setState({imgclicked,score})
        }
    };



    render() {
      return (
          <div>
        <Navbar
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <Header/>
        <Main>
        {this.state.images.map(images => (
          <Card
            selected={this.selected}
            id={images.id}
            key={images.id}
            name={images.name}
            image={images.image}
            
          />
        ))}
        </Main>
        <Footer/>
        </div>
      );
    }
  }
  
  export default App;