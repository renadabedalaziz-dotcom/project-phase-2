import Rate from "./Rate";
function Card({image,name,price,rating}){
    return(
        <div style={{padding:"10px",}}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            {rating && <Rate />}
        </div>

    );
}
export default Card;