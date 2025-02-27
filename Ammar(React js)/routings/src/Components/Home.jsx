import React from 'react'
import Carousel from '../SubComponents/Carousel'
import Services from '../SubComponents/Services'
import OurTeam from '../SubComponents/OurTeam'
import Package from '../SubComponents/Package'

export default function Home() {
  return (
    <>
    <Carousel/>
    <Package/>
    <br />
    <Services/>
    <br />
    <OurTeam/>
    <br />
    </>
  )
}
