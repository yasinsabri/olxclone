import React from 'react'

const Productcard = ({ImgUrl , Price , Title, Location}) => {
  return (
    <React.Fragment>
        <div className="card  ">
            <div className=' '>
                <img src={ImgUrl} alt=""  className='card-img'/>
                <h6 className=' mx-4 pt-5'><p>Rs {Price}</p></h6>
                <p className=' mx-4 pt-3'>{Title}</p>
                <p className=' mx-4 pt-3 '>{Location}</p>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Productcard
