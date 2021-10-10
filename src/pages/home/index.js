import React from 'react'
import { HeroSection } from '../../components/HeroSection'
import { PropertyList } from '../../components/ProperyList'
import './styles.css'

export const Home = () => {
  return (
    <div className="rela__home">      
      <HeroSection />
      <PropertyList />
    </div>
  )
}