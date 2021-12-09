import React, { useState, useEffect } from "react";
import "./styles.css";
import { PropertyCard } from "../PropertyCard";
import axios from "axios";

export const PropertyList = () => {
  const [loading, setLoading] = useState();
  const [propertyList, setPropertyList] = useState([]);
  const fetchProperties = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://landxpress.herokuapp.com/api/property/"
      );
      setPropertyList(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e.response);
      let message = e?.response?.data?.message || "An error Occurred";
      console.log(message);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);
  return (
    <div className="rela__propertyList">
      <section class="py-5 bg-light text-center container">
        <div class="row py-lg-5">
          <div class="w-75 mx-auto">
            <h1>Property Listings</h1>
            <p class="lead text-muted">
              These are currently the property that our virtual inspection
              service currently covers
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 mt-4 bg-light">
        <div className="container">
          {propertyList.length < 1 ? (
            <p>No Property Listed yet</p>
          ) : (
            <div className="row row-cols-1 justify-content-between row-cols-sm-2 row-cols-md-4 g-3">
              {
                propertyList.map((property) => {
                return <PropertyCard {...property} />;
                })
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
