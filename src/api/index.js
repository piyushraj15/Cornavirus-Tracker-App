import axios from 'axios'
import { useEffect } from 'react'

const url=" https://covid19.mathdro.id/api"

export const getData = async (country) => {
  let newUrl=url
  console.log(country, "in nget")

  if(country){
    newUrl= `${url}/countries/${country}`
  }
  try{
      const { data :{confirmed , recovered, deaths, lastUpdate} }= await axios.get(newUrl)

      return {confirmed , recovered, deaths, lastUpdate}

  }
  catch(err){
      
  }
}

export const fetchDailyData= async() =>{

  try{
    const { data } =  await axios.get(`${url}/daily`);

    const newdata= data.map((dailydata)=>({
      confirmed:dailydata.confirmed.total,
      deaths:dailydata.deaths.total,
      date:dailydata.reportDate,
    }));

    
    return newdata
  } catch(error){

  }

}

export const countries=async()=>{
  try{
    const {data:{countries}}= await axios.get(`${url}/countries`)
    return countries.map((country)=>country.name)
  }

  catch(err){

  }
}

