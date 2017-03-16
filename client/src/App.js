import React, { Component } from 'react';
import axios from 'axios';
import Text from './components/Text';
import Select from './components/Select';
import Output from './components/Output';

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

  changeParas(num) {
    this.setState({paras: num}, this.getSampleText);
  }

  showHtml(choice) {
    this.setState({html: choice}, this.getSampleText);
  }

  render() {
    return (
      <div className="App container">
        <h1 className='text-center'>ReactJS Sample Text Generator</h1>
        <hr />
        <form className="form-inline">
          <div className='form-group'>
            <label>Paragraphs:</label>
            <Text value={this.state.paras}
                onChange={this.changeParas.bind(this)}
            />
          </div>
          <div className='form-group'>
            <label>Include HTML:</label>
            <Select value={this.state.html}
                    onChange={this.showHtml.bind(this)}
            />
          </div>
        </form>
        <br /><br />
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
