import React from "react";
import { useNavigate } from "react-router-dom";

function Card({name, population, flag, region, capital}) {
  const navigate = useNavigate();

  const f = new Intl.NumberFormat(undefined, {});
  return (
    <div className="card shadow " onClick={()=>navigate(`/detail?name=${name}`)}>
      <div className="card__container">
        <div className="card__flag">
          <img src={flag} alt="country flag" />
        </div>
        <div className="card__info">
          <div className="county__name">
            <h2>{name}</h2>
          </div>
          <div className="county__detail">
            <p>
              <span className="bold">Population: </span>
              <span>{f.format(population)}</span>
            </p>
            <p>
              <span className="bold">Region: </span>
              <span>{region} </span>
            </p>
            <p>
              <span className="bold">Capital: </span>
              <span>{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
