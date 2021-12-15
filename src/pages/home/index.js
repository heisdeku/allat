import React from 'react'
import { HeroSection } from '../../components/HeroSection'
import { Navbar } from '../../components/Navbar'
import { PropertyList } from '../../components/ProperyList'
import './styles.css'

export const Home = () => {
  return (
    <>
    <Navbar />
    <div className="rela__home">      
      <HeroSection />
      <PropertyList />
    </div>
    </>
    
  )
}