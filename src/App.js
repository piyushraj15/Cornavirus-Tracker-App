import React, { Component } from 'react';

import styles from './App.module.css';

import Axios from 'axios'

import image from './images/imagecovid.jpg'


import {Cards ,Chart ,Country} from './components'

import {getData} from './api'



const url=" https://covid19.mathdro.id/api"

class App extends Component {
  
  state={
    data:{},
    country:""
  }

  async componentDidMount(){

    const data = await getData();

    this.setState({data:data})
  }

   handleCountryChange=async(country)=>{
    console.log(country)  
    const fetchedData= await getData(country);
    console.log(fetchedData)
    this.setState({data:fetchedData,country:country});
  }
  
  
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} alt="covid-19" src={image}/>
        <Cards data={this.state.data}/>
        <Country handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    )
  }
}

export default App;
