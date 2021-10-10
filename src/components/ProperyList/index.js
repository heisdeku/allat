import React from 'react'
import './styles.css'
import { PropertyCard } from '../PropertyCard'

export const PropertyList = () => {
  return (
    <div className="rela__propertyList">
      <section class="py-5 bg-light text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1>Property Listings</h1>
            <p class="lead text-muted">These are currently the property that our virtual inspection service currently covers</p>
          </div>
        </div>
      </section>
      <div className="album py-5 mt-4 bg-light">
        <div className="container">
          <div className="row row-cols-1 justify-content-between row-cols-sm-2 row-cols-md-4 g-3">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </div>
    </div>
  )
}

