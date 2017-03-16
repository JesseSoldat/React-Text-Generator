import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      paras: 4,
      html: true,
      text: ''
    };
  }
 
  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){

    axios.get('http://hipsterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html)
      .then((res) => {
        this.setState({text: res.data.text}, () => {
          // console.log(res.data.text);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App container">
        <h1 className='text-center'>ReactJS Sample Text Generator</h1>
       
      </div>
    );
  }
}

export default App;
