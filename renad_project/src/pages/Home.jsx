
import Card from "../components/Card";

import img1 from "../assets/image/img1.jpg";
import c3 from "../assets/image/c3.jpg";
import c7 from "../assets/image/c7.png";


import avoca from "../assets/image/avoca.png";
import cup2 from "../assets/image/cup2.png";
import HULK_cup from "../assets/image/HULK_cup.png";

import cocktail_pieces from "../assets/image/cocktail_pieces.png";
import cocktail_light from "../assets/image/cocktail_light.png";
import tropicana_cup from "../assets/image/tropicana_cup.png";
import naplion_cup from "../assets/image/naplion_cup.jpg";

import strawberry_juice_cocktail from "../assets/image/strawberry_juice_cocktail.jpg";
import strawberry_juice_cocktail_extra from "../assets/image/strawberry_juice_cocktail_extra.jpg";
import strawberry_juice_cocktail_bottle from "../assets/image/strawberry_juice_cocktail_bottle.jpg";
import strawberry_juice from "../assets/image/strawberry_juice.jpg";
import strawberry_juice_extra from "../assets/image/strawberry_juice_extra.jpg";
import shekh_juice from "../assets/image/shekh_juice.jpg";
import phesta_juice from "../assets/image/phesta_juice.jpg";
import carrot_juice from "../assets/image/carrot_juice.jpg";
import carrot_juice_bottle from "../assets/image/carrot_juice_bottle.jpg";
import apple_juice from "../assets/image/apple_juice.jpg";
import apple_juice_bottle from "../assets/image/apple_juice_bottle.jpg";
import lemon_juice from "../assets/image/lemon_juice.jpg";

import ashta from "../assets/image/ashta.jpg";
import gardenplate from "../assets/image/gardenplate.jpg";
import gardenextra from "../assets/image/gardenextra.jpg";
import married_couples_plate from "../assets/image/married_couples_plate.jpg";

import custard from "../assets/image/custard.jpg";
import creme_caramel from "../assets/image/creme_caramel.jpg";
import muffin from "../assets/image/muffin.jpg";
import lazycake from "../assets/image/lazycake.jpg";

import redvelvet from "../assets/image/redvelvet.jpg";
import cheesecake_piece from "../assets/image/cheesecake_piece.jpg";
import cake from "../assets/image/cake.jpg";
import browniecake from "../assets/image/browniecake.jpg";

function Home({ cart, setCart }) {
const cards = [
{id: 1,
image: avoca,
name:"Avocado cup",
category:"special",
price:" $7.20 "
},
{id: 2,
image: cup2,
name: "V.I.P cup",
category:"special",
price:"$8.00"
},
{id: 3,
image:HULK_cup,
name: "HULK cup",
category:"special",
price:"$7.20",
},

{id: 4,
image: cup2,
name: "V.I.P cup",
category:"special",
price:"$8.00"
},
{id: 5,
image: cocktail_pieces,
name: "cocktail pieces",
category:"cocktail",
price:"$6.40",
},
{id: 6,
image: cocktail_light,
name: " light cocktail cup",
category:"cocktail",
price:"$4.00",
},
{id: 7,
image: tropicana_cup,
name: "tropicana cup",
category:"cocktail",
price:"$7.20",
},
{id: 8,
image: naplion_cup,
name: "naplion cup",
category:"cocktail",
price:"$3.68",
},
{id: 9,
image: strawberry_juice_cocktail,
name: "cocktail juice cup",
category:"cocktail_juice",
price:"$1.92",
},
{id: 10,
image: strawberry_juice_cocktail_extra,
name: "Extra cocktail juice",
category:"cocktail_juice",
price:"$2.64",
},
{id: 11,
image: strawberry_juice_cocktail_bottle,
name: "Bottled cocktail juices",
category:"cocktail_juice",
price:"$4.00",
},
{id:12,
image: strawberry_juice,
name: "Strawberry juice cup",
category:"cocktail_juice",
price:"$1.92",
},

{id: 13,
image: strawberry_juice_extra,
name: "Extra Strawberry juice",
category:"cocktail_juice",
price:"$2.64",
},
{id: 14,
image: shekh_juice,
name: "Al sheikh juice cup",
category:"cocktail_juice",
price:"$1.92",
},
{id: 15,
image: phesta_juice,
name: "Fiesta juice cup",
category:"cocktail_juice",
price:"$4.00",
},
{id:16,
image: carrot_juice,
name: "Carrot juice cup",
category:"cocktail_juice",
price:"$2.72",
},

{id: 17,
image: carrot_juice_bottle,
name: "Bottled carrot juice",
category:"cocktail_juice",
price:"$3.40",
},
{id: 18,
image: apple_juice,
name: "Apple juice cup",
category:"cocktail_juice",
price:"$2.72",
},
{id: 19,
image: apple_juice_bottle,
name: "Bottled apple juice",
category:"cocktail_juice",
price:"$3.40",
},
{id:20,
image: lemon_juice,
name: "Lemon juice cup",
category:"cocktail_juice",
price:"$1.92",
},
{id: 21,
image: ashta,
name: "Ashta plate with nuts",
category:"ashta",
price:"$16.00",
},
{id: 22,
image: gardenplate,
name: "Garden plate",
category:"ashta",
price:"$13.00",
},
{id: 23,
image: gardenextra,
name: "Garden plate extra",
category:"ashta",
price:"$15.00",
},
{id: 24,
image: married_couples_plate,
name: "Married Couples Plate",
category:"ashta",
price:"$17.00",
},
{id: 25,
image: custard,
name: "Custard",
category:"sweet",
price:"$1.25",
},
{id: 26,
image: creme_caramel,
name: "creme caramel",
category:"sweet",
price:"$1.25",
},
{id: 27,
image: muffin,
name: "Muffin",
category:"sweet",
price:"$2.00",
},
{id: 28,
image: redvelvet,
name: "Red Velvet cake",
category:"sweet",
price:"$4.25",
},

{id: 29,
image: lazycake,
name: "Lazy cake",
category:"sweet",
price:"$3.25",
},

{id: 30,
image: cheesecake_piece,
name: "CheeseCake Blueberry",
category:"sweet",
price:"$4.25",
},
{id: 31,
image: cake,
name: "choculate cake",
category:"sweet",
price:"$6.00",
},
{id: 32,
image: browniecake,
name: "Brownie cake",
category:"sweet",
price:" $3.50",
},
];
const mobile = window.innerWidth < 600;

const addToCart=(item)=>{setCart([...cart,item]);}
return (
<div style={{backgroundColor:" rgb(250, 253, 255)"}}>


<div id="demo" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1" ></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2" ></button>
</div>


<div className="carousel-inner">
  <div className="carousel-item active">
    <img className="card-img-top" src={img1} alt="wait" height="80vh" width="100%" />
    <div className="carousel-caption">
  <h1 style={{textAlign:"left", color:"black",fontWeight:"bold"}}>Al Akkad Cocktail</h1>
</div>
  </div>
  <div className="carousel-item">
    <img src={c3} alt="wait" height="80vh" width="100%" />
  </div>
  <div className="carousel-item">
    <img src={c7} alt="wait" height="80vh" width="100%" />
  </div>
</div>

</div>
<div style={{ display: "flex", gap: "30px",marginTop:"40px",marginBottom:"40px",justifyContent: "center"}}>
<button style={{borderRadius:"20px",width: mobile ? "90%" : "200px"}} ><a style={{textDecoration:"none",color:"black"}} href="#1">Akkad Specialists</a></button>
<button style={{borderRadius:"20px",width: mobile ? "90%" : "200px"}} ><a style={{textDecoration:"none",color:"black"}} href="#2">Cocktail Pieces</a></button>
<button style={{borderRadius:"20px",width: mobile ? "90%" : "200px"}} ><a style={{textDecoration:"none",color:"black"}} href="#3">Cocktail and Juice</a></button>
<button style={{borderRadius:"20px",width: mobile ? "90%" : "200px"}} ><a style={{textDecoration:"none",color:"black"}} href="#4">Ashta</a></button>
<button style={{borderRadius:"20px",width: mobile ? "90%" : "200px"}} ><a style={{textDecoration:"none",color:"black"}} href="#5">Sweets</a></button>
</div>

<div className="container">
<h1 style={{color:"red",fontWeight:"bold",marginBottom:"30px",marginTop:"30px"}}><a name="1">Akkad specialists</a></h1>
</div>
<div className="c container" >
    <div className="row">

{cards
  .filter(item => item.category === "special")
  .map(item => (
    <div className="col-sm-12 col-md-6 col-lg-3">
    <div style={{overflow:"hidden"}}>
    <Card
   
      key={item.id}
      image={item.image}
      name={item.name}
      price={item.price}
      rating={true}
    />
    </div>
    <div style={{textAlign:"center",marginBottom:"30px"}}>
    <button style={{width:"100%",maxWidth:"250px",borderRadius:"5px",textAlign:"center"}}
     onClick={() => addToCart(item)}>Add to Cart</button>
    </div>

    </div>

  ))}
</div>
</div>

<div className="container">
<h1 style={{color:"red",fontWeight:"bold",marginBottom:"30px",marginTop:"30px"}}><a name="2">Cocktail and Juice</a></h1>
</div>
<div className="c container" >
    <div className="row">

{cards
  .filter(item => item.category === "cocktail")
  .map(item => (
    <div className="col-sm-12 col-md-6 col-lg-3">
    <div style={{overflow:"hidden"}}>
    <Card
      key={item.id}
      image={item.image}
      name={item.name}
      price={item.price}
      rating={true}
    />
    </div>
    <div style={{textAlign:"center",marginBottom:"20px"}}>
    <button style={{width:"100%",maxWidth:"250px",borderRadius:"5px",textAlign:"center"}}
     onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
    </div>

  ))}
</div>
</div>

<div className="container">
<h1 style={{color:"red",fontWeight:"bold",marginBottom:"30px",marginTop:"30px"}}><a name="3">Cocktail Pieces</a></h1>
</div>
<div className="c container" >
    <div className="row">
        
{cards
  .filter(item => item.category === "cocktail_juice")
  .map(item => (
    <div className="col-sm-12 col-md-6 col-lg-3">
    <div style={{overflow:"hidden"}}>
    <Card
      key={item.id}
      image={item.image}
      name={item.name}
      price={item.price}
      rating={true}
    />
    </div>
    <div style={{textAlign:"center",marginBottom:"20px"}}>
    <button style={{width:"100%",maxWidth:"250px",borderRadius:"5px",textAlign:"center"}}
     onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
    </div>
    

  ))}
</div>
</div>

<div className="container">
<h1 style={{color:"red",fontWeight:"bold",marginBottom:"30px",marginTop:"30px"}}><a name="4">Ashta</a></h1>
</div>
<div className="c container" >
    <div className="row">
{cards
  .filter(item => item.category === "ashta")
  .map(item => (
    <div className="col-sm-12 col-md-6 col-lg-3">
    <div style={{overflow:"hidden"}}>
    <Card
      key={item.id}
      image={item.image}
      name={item.name}
      price={item.price}
      rating={true}
    />
    </div>
    <div style={{textAlign:"center",marginBottom:"20px"}}>
    <button style={{width:"100%",maxWidth:"250px",borderRadius:"5px",textAlign:"center"}}
     onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
    </div>

  ))}
</div>
</div>
<div className="container">
<h1 style={{color:"red",fontWeight:"bold",marginBottom:"30px",marginTop:"30px"}}><a name="5">Sweets</a></h1>
</div>
<div className="c container" >
    <div className="row">
{cards
  .filter(item => item.category === "sweet")
  .map(item => (
    <div className="col-sm-12 col-md-6 col-lg-3">
    <div style={{overflow:"hidden"}}>
    <Card
      key={item.id}
      image={item.image}
      name={item.name}
      price={item.price}
      rating={true}
    />
    </div>
    <div style={{textAlign:"center",marginBottom:"20px"}}>
    <button style={{width:"100%",maxWidth:"250px",borderRadius:"5px",textAlign:"center"}} 
    onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
    </div>

  ))}
</div>
</div>
</div>

);
}
export default Home;