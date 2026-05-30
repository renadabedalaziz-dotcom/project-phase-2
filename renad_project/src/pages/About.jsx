import col1 from "../assets/image/col1.png";
import col2 from "../assets/image/col2.png";
import col3 from "../assets/image/col3.png";
import bg1 from "../assets/image/bg1.jpeg";
import Card from "../components/Card";
function About(){
const picture=[
{id: 1,
image: col1,
desc:"We are Al Akkad Cocktail, located in Bustan Al kabir,Saida,specializing in fresh fruits cocktails and delicious sweets."
},
{id: 2,
image: col2,
desc:" We provide a variety of cakes,ashta(fresh cream), ice cream,crepes,and waffles, using fresh ingredients, and rich flavors that satisfy all tastes"
},
{id: 3,
image: col3,
desc:"We pride ourselves on high quality, cleanlines, and fast service,making us a favorite destination forjuice and dessert lovers in Saida."
},
];
return(
<div style={{backgroundImage:`url(${bg1})`, backgroundSize: "cover",backgroundPosition: "center",
paddingTop: "40px",width: "100%",minHeight: "90vh",}}>


<h1 style={{marginTop:"30px",fontFamily:"serif",fontWeight:" 900",textAlign: "center",marginBottom:"30px"}}>About Us</h1>

<hr style={{marginLeft:"auto", marginRight: "auto",background: "orange",border: "none",height:"2px",width:"50%",size:"7"}} />

<p style={{textAlign:"center"}}>At Al Akkad Cocktail in Bustan Al Kabir,Saida,we offer a delightful selection of fresh
        <br /> juices,unique cocktails,and delicious sweets that brings joy to our customers 
        <br />daily</p>




<div className="container">
<div className="row" style={{display:"flex"}}>
{picture
  .filter(item => item.id === 1)
  .map(item => (
    <div className="col-sm-12 col-md-12 col-lg-4 ">
      <h3 id="orange">Who We Are</h3>
    <div style={{overflow:"hidden"}}>
    <Card
      key={item.id}
      image={item.image}
      desc={item.desc}

    />
    </div>
    <p style={{textAlign:"center"}}>We are Al Akkad Cocktail, located in Bustan Al kabir,Saida,specializing 
      in fresh fruits cocktails and delicious sweets.</p>

    </div>

  ))}

{picture
  .filter(item => item.id === 2)
  .map(item => (
    <div className="col-sm-12 col-md-12 col-lg-4">
    <h3 id="green">What We Offer</h3>
    <div style={{overflow:"hidden"}}>
    <Card
      key={item.id}
      image={item.image}
      desc={item.desc}

    />
    </div>
    <p style={{textAlign:"center"}}>We provide a variety of cakes,ashta(fresh cream), ice cream,crepes,and waffles, using fresh ingredients,
       and rich flavors that satisfy all tastes.</p>

    </div>

  ))}

{picture
  .filter(item => item.id === 2)
  .map(item => (
    <div className="col-sm-12 col-md-12 col-lg-4">
    <h3 id="blue">Why Choose Us</h3>
    <div style={{overflow:"hidden"}}>
    <Card
      key={item.id}
      image={item.image}
      desc={item.desc}

    />
    </div>
     <p style={{textAlign:"center"}}>We pride ourselves on high quality, cleanlines, and fast service,making us a
       favorite destination for juice and dessert lovers in Saida.</p>

    </div>

  ))}
</div>
</div>
</div>
);
}
export default About;
