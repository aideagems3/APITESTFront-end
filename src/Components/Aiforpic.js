import React from "react";
import axios from "axios";


const aiforpic = (props) => {

  const aiforpicSubmit = () => {
    const uploaddata = new FormData();
      uploaddata.append('Imagefromuser',props.Img);
      uploaddata.append('Equipmentfromuser',props.Eq);
    for (var pair of uploaddata.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
   
    axios.post('http://127.0.0.1:8000/picwithmodel/imageformodelList/',uploaddata)

    .then((response)=> console.log(response))
    .catch((error) =>  console.log(error))
  }

    return (
        <div>
        <h3> Upload Image </h3>

        <h5>(You would like to use our AI) </h5>
        <label>
          Image :
          <input type="file"   onChange={props.changed2}/>
        </label>
        
        <h5>(Please fill out equipment name)</h5>
        <label>
          Equipment :
          <input type="text"  value={props.Eq} onChange={props.changed1} />
        </label>
        <p>Test prop Eq = {props.Eq}</p>
        <button onClick={()=>aiforpicSubmit()} >Send For Processing</button>
       
      </div>
    )
  
}
export default aiforpic;