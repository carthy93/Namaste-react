import { useState } from "react";
import resList from "../utils/mockData";
import RestrauntCard from "./RestaurantCard";

const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      {console.log("listofRestaurants", listofRestaurants)}
      <div className="filter">
        <button
          onClick={() => {
            const filteredRestaurants =
              listofRestaurants.gridElements.infoWithStyle.restaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
            setListOfRestaurants({
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
        {listofRestaurants.gridElements.infoWithStyle.restaurants.map(
          (restaurant) => (
            <RestrauntCard key={restaurant.info.id} resData={restaurant.info} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
