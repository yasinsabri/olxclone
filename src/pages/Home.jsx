import React from 'react'
import Allcategories from '../component/Element/Allcategories'
import Mobilephone from '../component/Element/Mobilephone'
import Cars from '../component/Element/Cars'
import Bikes from '../component/Element/Bikes'
import Houses from '../component/Element/Houses'
import Tablets from '../component/Element/Tablets'
import Lands from '../component/Element/Lands'
import Jobs from '../component/Element/Jobs'

const Home = () => {
  return (
    <React.Fragment>
      <Allcategories/>
      <Mobilephone/>
      <Cars/>
      <Bikes/>
      <Houses/>
      <Tablets/>
      <Lands/>
      <Jobs/>
    </React.Fragment>
  )
}

export default Home
