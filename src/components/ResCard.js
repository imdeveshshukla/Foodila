import { REST_IMG_URL } from "../utils/Images";

const RestCard = ({ name,cuisines,cloudinaryImageId,sla,areaName }) => {
    
    // const  = restr; 
    
    return(
    <div className="restCard">
    <img src={REST_IMG_URL+cloudinaryImageId} alt="resImg" className="resImg" />
    
    <h3>{name}</h3>
    <span>{cuisines?.join(",")}</span>
    <h5 style={ {margin:'0px'} }>{sla?.lastMileTravelString}</h5>
    <span>{areaName}</span>

    </div>
    // console.log(props)
)};

export default RestCard;