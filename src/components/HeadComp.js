import { restList } from "../utils/resturantlist";
import RestCard from "./ResCard";

const HeadComp = () => {
    return 
    (
        <div className="RestList">
        {
            restList.map((rest)=>{
                return (<RestCard {...rest.info} key={rest.info.id}/>)
            })
        }
        {/* <RestCard {...restList[0].info}/>
        <RestCard {...restList[1].info}/>
        <RestCard {...restList[2].info}/>
        <RestCard {...restList[3].info}/>
        <RestCard {...restList[4].info}/>
        <RestCard {...restList[5].info}/>
        <RestCard {...restList[6].info}/>
        <RestCard {...restList[7].info}/>
        <RestCard {...restList[8].info}/>
        <RestCard {...restList[9].info}/>
        <RestCard {...restList[10].info}/>
        <RestCard {...restList[11].info}/> */}
        </div>
    );
};

export default HeadComp;
