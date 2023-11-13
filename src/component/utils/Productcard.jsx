import React from 'react'

const Productcard = ({ImgUrl , Price , Title, Location}) => {
  return (
    <React.Fragment>
        <div className="card  ">
            <div className=' card-details '>
                <img src={ImgUrl} alt=""  className='card-img'/>
                <h6 className=' mx-2 pt-1'><p>Rs {Price}</p></h6>
                <p className=' mx-2 pt-1'>{Title}</p>
                <p className=' mx-2 pt-1 '>{Location}</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Productcard
