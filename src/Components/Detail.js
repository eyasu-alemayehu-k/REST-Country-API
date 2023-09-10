import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function Detail() {
  const [searchparams] = useSearchParams();
  const [country, setCountry] = useState([]);
  const navigate = useNavigate();

  const f = new Intl.NumberFormat(undefined, {});

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let name = searchparams.get("name");

//   console.log(name)

  return (
    <div className="detail">
      <div className="detail__btn">
        <Link to="/" className="btn">
          <BsArrowLeft /> Back
        </Link>
      </div>
      <div className="detail__content--wrapper">
        {country.length > 0
          ? country
              ?.filter((items) => {
                return name === null
                  ? items
                  : items.name.includes(name);
              })
              ?.map((items) => (
                <div className="detail__content " key={name}>
                  <div className="detail__flag">
                    <img src={items.flag} alt="" />
                  </div>
                  <div className="detail__info">
                    <div className="country__name">
                      <h2>{items.name}</h2>
                    </div>
                    <div className="all__detail">
                      <div className="left">
                        <p>
                          <span className="bold">Native Name: </span>
                          <span>{items.nativeName}</span>
                        </p>
                        <p>
                          <span className="bold">Population: </span>
                          <span>{f.format(items.population)}</span>
                        </p>
                        <p>
                          <span className="bold">Region: </span>
                          <span>{items.region}</span>
                        </p>
                        <p>
                          <span className="bold">Sub Region: </span>
                          <span>{items.subregion}</span>
                        </p>
                        <p>
                          <span className="bold">Capital: </span>
                          <span>{items.capital}</span>
                        </p>
                      </div>
                      <div className="right">
                        <p>
                          <span className="bold">Top Level Domain: </span>
                          <span>{items.topLevelDomain}</span>
                        </p>
                        <p>
                          <span className="bold">Currencies: </span>
                          <span>{items.currencies[0].code}</span>
                        </p>
                        <p>
                          <span className="bold">Language: </span>
                          <span>{items.languages[0].name}</span>
                        </p>
                      </div>
                    </div>
                    <div className="border__country">
                      <p className="bold">Border Countries:</p>
                      <div className="border__btn">
                        {items.borders?.map((item, index) => {
                            let border_name = '';
                            country.map((obj)=>{
                                return obj.alpha3Code === item ? border_name = obj.name : ''
                            })
                            return(
                                <button key={index} className="btn" onClick={()=>navigate(`/detail?name=${border_name}`)}>{border_name}</button>
                            )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))
          : ""}
      </div>
    </div>
  );
}

export default Detail;
