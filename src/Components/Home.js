import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import Card from "./Card";

function Home() {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(option);
  // console.log(search)
  // console.log(country)
  return (
    <div className="home">
      <div className="home__filter">
        <div className="home__search">
          <AiOutlineSearch className="search__icon" />
          <input
            className="shadow"
            type="text"
            name="search"
            placeholder="Search for a country..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="home__select">
          <select
            className="shadow"
            name="region"
            id=""
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <div className="icon-container">
            <BiChevronDown />
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="detail_loading">
            <img src="/loading.gif" alt="loading" />
            <p>Loading you country please wait!</p>
        </div>
      ) : (
        <div className="home__cards">
          {country
            ?.filter((items) => {
              return option.toLowerCase() === ""
                ? items
                : items.region.toLowerCase().includes(option.toLowerCase());
            })
            ?.filter((items) => {
              return search.toLowerCase() === ""
                ? items
                : items.name.toLowerCase().includes(search.toLowerCase());
            })
            ?.map((items, index) => (
              <Card
                key={index}
                name={items.name}
                flag={items.flag}
                region={items.region}
                population={items.population}
                capital={items.capital}
                id={items.alpha3Code}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;
