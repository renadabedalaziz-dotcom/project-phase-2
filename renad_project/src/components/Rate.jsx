import { useState } from "react";
function Rate(){
    const [rate,setRate]=useState(0);
    return(
    <div>
    {[1,2,3,4,5].map((star)=>(
    <span
    key={star}
    onClick={()=>setRate(star)} 
    style={{fontSize:"30px",color:rate,color: star <= rate? "gold" : "gray"}}>★</span>    
    ))}
    </div>

    );
}
export default Rate;
