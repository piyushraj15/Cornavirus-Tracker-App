import axios from 'axios'

const url=" https://covid19.mathdro.id/api"

export const getData = async () => {
  try{
      const { data :{confirmed , recovered, deaths, lastUpdate} }= await axios.get(url)

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