import React, { useEffect, useState } from 'react';



function Temp() {
    const[city , setCity] = useState('');
    const [search, setSearch] = useState("karachi");


    
    const fetchApi = async()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f78962353c9046183f7e881b4b789167`
const  response = await fetch (url);
const resJson = await response.json();
// console.log(resJson);
setCity(resJson.main);
  }; 
    useEffect(()=>{
    
             fetchApi();
        
          },[search])

         


     return (
    <>
   
    <div className="box">
        <div className='inputData'>
            <input className='inputField' type='search' value={search}
             onChange={(event)=>{ setSearch(event.target.value) }}/>


        </div>
        {!city ? (
          <p>Not Data Found</p>
        ):(
          <div className='info'>
          <h2 className='location'>{search}
              {/* <></> */}
          </h2>
          <h1 className='temp'>{city.temp}°C
  
          </h1>
          <h3 className='tempmin-max'>Min:{city.temp}°C| Max:{city.temp}°C</h3>
      </div>
     
      
        )
        }
    

    </div>
    </>
  );
}

export default Temp;








