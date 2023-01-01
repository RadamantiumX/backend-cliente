
import './App.css';

import Mapa from './mapa/Mapa';

import { useState } from 'react';

import axios from 'axios';

import Swal from 'sweetalert2';


import Classifier from './classifier/Classifier';





function App() {
    //Geolocate
    const[latitud, setLatitud] = useState(null);
    const[longitud, setLongitud]= useState(null);
    const[display, setDisplay] = useState(false);

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition((pos)=>{
            setLatitud(pos.coords.latitude);
            console.log(latitud);
            setLongitud(pos.coords.longitude);
            console.log(longitud);
        },(error)=>{
            switch(error.code){
                case error.PERMISSION_DENIED:
                    console.log("El usuario denegó la solicitud")
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("Localización no disponible")
                    break;
                case error.TIMEOUT:
                    console.log("Se agotó el tiempo de espera para la localizacion")
                    break;
            }
        })

    }else{
        console.log('Tu navegador no soporta geolocalizacion')
    }

//Abre el mapa
const handleOpenMap=()=>{
    setDisplay(true);
}

//Cierra el mapa
const handleCloseMap =()=>{
    setDisplay(false);
}

const sendData = async(e)=>{
  e.preventDefault();

  const formData = new FormData();

  formData.append('latitud',latitud);
  formData.append('longitud',longitud);

  await axios.post(`http://127.0.0.1:8000/api/enviar`,formData).then(({data})=>{
    Swal.fire({
        icon:"success",
        text:data.message
    })

  })
}



  return (
    <div className="App">

        <div className='geoLocate'>
            <div className='dataView'>
                <h1>Tu Localizacion</h1>
                <h3>Latitud: {latitud}</h3>
                <h3>Latitud: {longitud}</h3>
            </div>

            <div className='dataSend'>
                <form onSubmit={sendData}>
                <input type="hidden" value={latitud} onChange={(event)=>{setLatitud(event.target.value)}}/>
                <input type="hidden" value={longitud} onChange={(event)=>{setLongitud(event.target.value)}}/>
                <input type="submit" value="Enviar datos"/>
                </form>
            </div>

        </div>

        <div className='mapSource'>
         {display===false &&<button onClick={handleOpenMap}>Mostrar en el mapa</button>}
         {display && <button onClick={handleCloseMap} >Ocultar Mapa</button>}
         {display && <Mapa/>}
        </div>

        <Classifier/>

    </div>

  )
}

export default App
