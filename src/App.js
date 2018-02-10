import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      txt: "This is a modifiable text",
      job1:("Project", "Project description") 
    }
  }
  update(e){
    this.setState({txt:e.target.value})
  }
  render(){
    let txt = this.state.txt
    return (
    <div className="background">      
      <ul className='header'>
        <li className="name">Jesus Urias</li>
        <li className="job">Web Developer</li>
      </ul>
      <Description  />
      <div className="paralax img1" />
      
      <Description />
      
      <div className="paralax img2" />
      <Description />

    </div>
    )
  }
}


const Description = (props) =>
  <div className="sticky">
    <h1>
      Title
    </h1> 
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit nisl eu ante convallis blandit. Morbi id pellentesque dui, ac mattis enim. Sed posuere ligula id nisl dapibus ultrices. Maecenas eu libero commodo, suscipit ipsum nec, venenatis nisl. Praesent ut facilisis metus. Aliquam ultrices semper nulla vitae consectetur. Curabitur vitae nulla eros. Quisque lorem risus, rhoncus ut aliquam non, egestas id sem. Quisque tristique in neque vitae tempor. Sed euismod metus sit amet nisi fermentum, nec euismod diam ultrices. Morbi maximus nec est sed pharetra. Aliquam vel arcu lacus.
    </p>   
  </div>  


App.propTypes = {
  txt: PropTypes.string
}

App.defaultProps = {
  txt: "This is my default"
}


export default App