import React, { Component } from 'react';

import styles from './App.module.css';

import Axios from 'axios'

import {Cards ,Chart ,Country} from './components'

import {getData} from './api'

const url=" https://covid19.mathdro.id/api"

class App extends Component {
  
  state={
    data:{}
  }

  async componentDidMount(){

    const data = await getData();

    this.setState({data:data})
  }
  
  
  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data}/>
        <Country/>
        <Chart/>
      </div>
    )
  }
}

export default App;
