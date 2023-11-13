import React from 'react'
import Productcard from "../utils/Productcard";


const Houses = () => {
    const cardData =[
        {
            ImgUrl:"asset/H1.jpeg",
            Price:"44447000",
            Title:"THE ZABEEL PALACE FULL FURNISHED VILLA FOR SALE",
            Location:"islamabad",

        },
        {
            ImgUrl:"asset/H2.jpeg",
            Price:"44447000",
            Title:"THE ZABEEL PALACE FULL FURNISHED VILLA FOR SALE",
            Location:"islamabad",

        },
        {
            ImgUrl:"asset/H3.jpeg",
            Price:"44447000",
            Title:"THE ZABEEL PALACE FULL FURNISHED VILLA FOR SALE",
            Location:"islamabad",

        },
        {
            ImgUrl:"asset/H4.jpeg",
            Price:"44447000",
            Title:"THE ZABEEL PALACE FULL FURNISHED VILLA FOR SALE",
            Location:"islamabad",

        }
    ]
  return (
    <React.Fragment>
      <div className="container-fluid mx-4 pt-5 ">
        <div className="row">
          <h4>Houses</h4>
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

export default Houses
