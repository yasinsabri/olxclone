import React from 'react'
import Productcard from "../utils/Productcard";

const Jobs = () => {
    const cardData =[
        {
            ImgUrl:"asset/J1.jpeg",
            Price:"44447000",
            Title:"THE ZABEEL PALACE FULL FURNISHED VILLA FOR SALE",
            Location:"islamabad",

        },
        {
            ImgUrl:"asset/J2.jpeg",
            Price:"44447000",
            Title:"THE ZABEEL PALACE FULL FURNISHED VILLA FOR SALE",
            Location:"islamabad",

        },
        {
            ImgUrl:"asset/J3.jpeg",
            Price:"44447000",
            Title:"THE ZABEEL PALACE FULL FURNISHED VILLA FOR SALE",
            Location:"islamabad",

        },
        {
            ImgUrl:"asset/J4.jpeg",
            Price:"44447000",
            Title:"THE ZABEEL PALACE FULL FURNISHED VILLA FOR SALE",
            Location:"islamabad",

        }
    ]
  return (
    <React.Fragment>
      <div className="container-fluid mx-4 pt-5 ">
        <div className="row">
          <h4>Jobs</h4>
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

export default Jobs
