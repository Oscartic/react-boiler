import React, { Component } from "react";
import { Grid } from 'react-bootstrap'; 

export class App extends Component {
  render() { 
    const { nombre, message } = this.props;

    return(
      <Grid>
        <h1>Hola { nombre }</h1>
        <p>{ message }</p>
      </Grid>
    );
  }
}
App.defaultProps = {
  nombre : "React", 
  message : "Este es un elemento parrafo seteado por default."
};
export default App;
