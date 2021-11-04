import React,{useState} from "react";
import axios from "axios";


const Aiforpic = () => {

  const [img,setImg] = useState("https://www.freeiconspng.com/uploads/blue-up-file-circle-document-upload-icon-23.png") 
  
  const [send,setSend] = useState(false)

  const [result,setResult] = useState("")

  const [picresult,setPicresult] = useState("")

  const picinputHandler = (event) => {
      const reader = new FileReader();
          reader.onload = () => {
            if(reader.readyState === 2){
              console.log(reader.result)
              // convert image file to base64 
              setImg(reader.result)
            
            }
            
          }
          // read some part DataURL base64string
          reader.readAsDataURL(event.target.files[0])
  }

  const resetpicHandler = () => {
    setImg("https://www.freeiconspng.com/uploads/blue-up-file-circle-document-upload-icon-23.png")
    setSend(false)
    setResult("")
  }

  const submitpic = () => {

      const uploaddata = new FormData();
      if(img !== "https://www.freeiconspng.com/uploads/blue-up-file-circle-document-upload-icon-23.png" && img !=="" )
      {
        console.log("There is pic");
        uploaddata.append('Imagefromuser',img);
        uploaddata.append('Objects',null);
        uploaddata.append('Success',false);
        uploaddata.append('Time',null);
        uploaddata.append('Lat',null);
        uploaddata.append('Lng',null);
        // uploaddata.append('Boxespic',null);
        //why Img.name is error?
        // for (var pair of uploaddata.entries()) {
        //   console.log(pair[0]+ ', ' + pair[1]); 
        // }
      
        // header is missing?
        axios.post('http://127.0.0.1:8000/picwithmodel/imageformodelList/',uploaddata)

        .then((response)=> {
            setSend(true)
            console.log("response.data=",response.data);
            getresult(response.data.id);
            getpicresult();
            
          })
        .catch((error) =>  console.log(error))
      }
      
      else
        console.log("There is NO pic");
 
      const getresult = (id) =>{
        // header is missing?
        axios.get(`http://127.0.0.1:8000/picwithmodel/imageformodelDetail/${id}`)

        .then((response)=>{
          setResult(response.data.Objects);
          
        })
        .catch((error) =>  console.log(error))
      }

      const getpicresult = () =>{
        setPicresult('http://127.0.0.1:8000/static/img/test.jpeg')
      }
  }





  // edit upload reset submit
  // show mnist after upload
  // upload show status success
  // reset 
  // submit mnist (post)
  // show result mnist (get)
  
    return (
        <div>
          <h3> Upload Image </h3>
          <div>
            {send && <alert variant="info">Successfully Submit For Processing</alert>}
          </div>
          <div>
            <label>
              Image :
              <input type="file"  onChange={(event)=>picinputHandler(event)} accept="image/*"/>
            </label>
          </div>
          <div className="img-holder">
            <img src={img} alt="preview"/>
          </div>
          <div className="img-holder">
            <img src={picresult} alt="picresult"/>
          </div>
          <div>
              {result && <h2>Result : {result}</h2>}
          </div>
          <div>
            <button onClick={()=>submitpic()} variant="primary">Submit For Processing</button>
          </div>
          <div>
            <button onClick={()=>resetpicHandler()} variant="secondary">Reset Your Image</button>
          </div>
        
          
      </div>
    )
  
}
export default Aiforpic;