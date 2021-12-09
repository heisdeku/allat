import React from "react";
import { formatMoney } from "../../utils/helper-functions";
import "./styles.css";

export const PropertyCard = ({ img, name, description, id, ...props }) => {
  return (
    <div className="col rela__propertyCard">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="40%" y="50%" fill="#eceeef" dy=".3em">
            Thumbnail
          </text>
        </svg>
        <div className="card-body">
          <h3>{name}</h3>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type className="btn btn-sm btn-outline-secondary">
                Check it out
              </button>
              <button
                onClick={() =>
                  window.open(
                    `https://api.whatsapp.com/send?phone=2349097115128&text=Hey%20team%20Land%20Xpress,%20I%20would%20to%20enquiry%20about%20one%20of%20your%20property.%20The%20name%20of%20the%20property%20is%20${name}%20and%20the%20price%20is%20${formatMoney(props.price)}%20naira,%20thanks.`
                  )
                }
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Enquiry About
              </button>
            </div>
            <small className="text-muted">{formatMoney(props.price)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
