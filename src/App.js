import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      txt: "This is a modifiable text"
    }
  }
  update(e){
    this.setState({txt:e.target.value})
  }
  render(){
    let txt = this.state.txt
    return (
    <div class="background">
      <ul class='header'>
        <li class="name">Jesus Urias</li>
        <li class="job">Web Developer</li>
      </ul>
      <h1>{txt}</h1>
      <Widget update={this.update.bind(this)} />
      <Button > React </Button>
    </div>
    )
  }
}

const Widget =  (props) =>
  <input type ="text" onChange={props.update}></input>

const Button = (props) =>
  <div>
    <button>{props.children}</button>
  </div>

App.propTypes = {
  txt: PropTypes.string
}

App.defaultProps = {
  txt: "This is my default"
}


export default App