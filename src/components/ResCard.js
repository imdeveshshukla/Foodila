
const RestCard = ({ name,cuisines,cloudinaryImageId,sla,areaName }) => {
    
    // const  = restr; 
    
    return(
    <div className="restCard">
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="resImg" className="resImg" />
    
    <h3>{name}</h3>
    <span>{cuisines?.join(",")}</span>
    <h5 style={ {margin:'0px'} }>{sla?.lastMileTravelString}</h5>
    <span>{areaName}</span>

    </div>
    // console.log(props)
)};