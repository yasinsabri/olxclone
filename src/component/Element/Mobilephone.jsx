import React from "react";
import Productcard from "../utils/Productcard";

const Mobilephone = () => {
    const cardData =[
        {
            ImgUrl:"asset/M1.jpeg",
            Price:"47000",
            Title:"One Plus",
            Location:"Islamabad",

        },
        {
            ImgUrl:"asset/M2.jpeg",
            Price:"447000",
            Title:"Iphone 12 Pro Max",
            Location:"Islamabad",

        },
        {
            ImgUrl:"asset/M3.jpeg",
            Price:"230000",
            Title:"Samsung Note 20",
            Location:"Islamabad",

        },
        {
            ImgUrl:"asset/M4.jpeg",
            Price:"45000",
            Title:"Redmi M9",
            Location:"Islamabad",

        }
    ]
  return (
    <React.Fragment>
      <div className="container-fluid mx-4 pt-5 ">
        <div className="row">
          <h4>Mobile Phones</h4>
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

export default Mobilephone;
