import { useEffect, useState } from "react";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9469182&lng=80.1480918&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaning
    setListOfRestaurants(json?.data?.cards[1]?.card?.card);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card);
  };

  // Ternary condition // Conditional rendering
  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {console.log("listofRestaurants", listofRestaurants)}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchedRestaurants =
                listofRestaurants.gridElements.infoWithStyle.restaurants.filter(
                  (res) =>
                    res?.info?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                );
              setFilteredRestaurants({
                ...listofRestaurants,
                gridElements: {
                  ...listofRestaurants.gridElements,
                  infoWithStyle: {
                    ...listofRestaurants.gridElements.infoWithStyle,
                    restaurants: searchedRestaurants,
                  },
                },
              });
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredRestaurants =
              listofRestaurants.gridElements.infoWithStyle.restaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
            setFilteredRestaurants({
              ...listofRestaurants,
              gridElements: {
                ...listofRestaurants.gridElements,
                infoWithStyle: {
                  ...listofRestaurants.gridElements.infoWithStyle,
                  restaurants: filteredRestaurants,
                },
              },
            });
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.gridElements?.infoWithStyle?.restaurants.map(
          (restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestrauntCard resData={restaurant.info} />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Body;
