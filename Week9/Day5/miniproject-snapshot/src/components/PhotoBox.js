import { useState, useEffect, useContext } from "react";
import { createClient } from 'pexels';
import { SearchContext } from "../App";

const Photobox = () => {

const [images, setImages] = useState([]);
const [searchCTXT, setSearchCTXT] = useContext(SearchContext);

const client = createClient('fKxgTp156XGeUiYt1NHQLu3759QxjeQeV9dbBAYdciycAIW7qRPP95mL');
const query = searchCTXT;

client.photos.search({ query, per_page: 30}).then(pictures => {
    setImages(pictures.photos);
  })
  .catch(e=>{
    console.log(e.message);
  });

  return(
    <div>
    <h2>{searchCTXT} Photos</h2>
    {images.map((image) => {
      return(
        <div key={image.id} className="photocard">
          <img src={image.src.tiny} alt="shapshot project"/>
          </div>
      )
    })}
    </div>

  );

};

export default Photobox;