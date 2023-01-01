import * as ml5 from 'ml5';
import { useEffect } from 'react';
import { useState, useRef } from 'react';


function Classifier({childToParent}){
    const[imageURL, setImageURL] = useState(null);
    const[identify,setIdentify] = useState(false);

    const[tagOne, setTagOne] = useState(null);
    const[tagTwo, setTagTwo] = useState(null);
    const[confOne, setConfOne] = useState(null);
    const[confTwo, setConfTwo] = useState(null);



    const imageRef = useRef();

    //Funciona con la URL del modelo hasta el momento
    const classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/y8n73XnCI/model.json', modelReady);

 function modelReady(){
  console.log('Modelo listo');
  if(identify != false){
  classifier.predict(imageRef.current, getResults);
  }
 }

 function getResults(error, results){
   if(error){
    console.log(error);
   }else{
    console.log(results);
    setTagOne(results[0].label);
    setTagTwo(results[1].label);
    setConfOne(results[0].confidence * 100);
    setConfTwo(results[1].confidence * 100);
   }
 }

 const uploadImage= (e)=>{
   const {files} = e.target;
   const canvas = document.getElementById('canvas');
   const ctx = canvas.getContext("2d");
   if(files.length > 0){
    const url = URL.createObjectURL(files[0]);
    setImageURL(url);
    ctx.drawImage(url,0,0);
   }else{
    setImageURL(null);
   }
 }

 const handleIndentify = ()=>{
   setIdentify(true);
 }








    return(
        <div className='imgClassifier'>
            <div className='uploadImage'>
             <h2>Prediccion de imagen</h2>
             <input type="file" name="imgFile" capture="camera" onChange={uploadImage}/>
           </div>

           <div className='imgHolder'>
             {imageURL && <div className='imageHolder'>
                <img src={imageURL} alt="uploadPreview" crossOrigin='anonymous' ref={imageRef}/>

                <button onClick={handleIndentify}>Clasificar</button>
            </div>}
           </div>

        </div>
    );


}

export default Classifier;
