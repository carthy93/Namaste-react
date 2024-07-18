import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData;
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestrauntCard;
