import React from 'react'
import ProfileDetails from '../components/ProfileDetails'
import Title from '../components/Title'
import { MainLayout } from '../styles/Layout'
import ServicesSection from '../components/ServicesSection'
const AboutPage = () => {
  return (
    <div>
        <MainLayout>
          <Title title={'About me'} span={'About Me'}/>
          <ProfileDetails/>
          <ServicesSection/>
        </MainLayout>
    </div>
  )
}


export default AboutPage