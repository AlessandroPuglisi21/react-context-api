// Card.js
import React from "react";

export default function Card({ diglet }) {
  const { country, digletTypes } = diglet;

  return (
    <div className="card">
      <h3 className="card-country">Paese: {country}</h3>
      <div className="card-body">
        {digletTypes.map((typeInfo, index) => (
          <div className="diglet-type" key={index}>
            <h4>{typeInfo.type}</h4>
            <img src={typeInfo.photo} alt={`Immagine di ${typeInfo.type}`} className="diglet-img"/>
          </div>
        ))}
      </div>
    </div>
  );
}
