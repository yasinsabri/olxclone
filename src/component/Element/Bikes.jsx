import React from 'react'
import Productcard from "../utils/Productcard";


const Bikes = () => {
    const cardData =[
        {
            ImgUrl:"asset/B1.jpeg",
            Price:"47000",
            Title:"nokia",
            Location:"islamabad",

        },
        {
            ImgUrl:"asset/B2.jpeg",
            Price:"47000",
            Title:"nokia",
            Location:"islamabad",

        },
        {
            ImgUrl:"asset/B3.jpeg",
            Price:"47000",
            Title:"nokia",
            Location:"islamabad",

        },
        {
            ImgUrl:"asset/B4.jpeg",
            Price:"47000",
            Title:"nokia",
            Location:"islamabad",

        }
    ]
  return (
    <React.Fragment>
      <div className="container-fluid mx-4 pt-5 ">
        <div className="row">
          <h4>Bikes & Motorcycles</h4>
          {cardData.map((value, index) => {
            return(
                <div className="col-sm-3 pt-3" key={index}>
                <Productcard
                ImgUrl={value?.ImgUrl}
                Price={value?.Price}
                Title={value?.Title}
                Location={value?.Location}
                />
              </div>
            )
          })}
         
        </div>
      </div>
    </React.Fragment>
  );
};


export default Bikes
