import { useState } from "react";
import { createClient } from 'pexels';

const Food = () => {

const [images, setImages] = useState([]);

const client = createClient('fKxgTp156XGeUiYt1NHQLu3759QxjeQeV9dbBAYdciycAIW7qRPP95mL');
const query = 'Food';

client.photos.search({ query, per_page: 30}).then(pictures => {
    setImages(pictures.photos);
  })
  .catch(e=>{
    console.log(e.message);
  });

  return(
    <>
    <h2>Food Images</h2>
    <div className="main">
    {images.map((image) => {
      return(
        <div className="photobox">
        <div key={image.id} className="photocard">
          <img src={image.src.tiny} alt="shapshot food"/>
          </div>
          </div>
      )
    })}
    </div>
        </>
  );

};

export default Food;