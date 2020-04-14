import React,{useEffect,useState} from 'react'

import {NativeSelect, FormControl} from '@material-ui/core' 

import styles from './Country.module.css'

import {countries} from '../../api'
const Country=({ handleCountryChange })=>{
    
    
        const [getCountries, setFetchedCountries]= useState([]);
      
        useEffect(()=>{
          const fetchCountries = async()=>{
          
            setFetchedCountries( await countries());
          }
          fetchCountries();
        },[setFetchedCountries])

        console.log(getCountries)
      
      

    return (
    <FormControl className={styles.FormControl}>
        <NativeSelect defaultValue=" " onChange={(e)=>handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {getCountries.map((country,i)=>(<option key={i}value={country}>{country}</option>))}
        </NativeSelect>
    </FormControl>
    )
}

export default Country