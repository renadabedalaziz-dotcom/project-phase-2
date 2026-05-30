import bg2 from "../assets/image/bg2.jpeg";
function Contact(){
return(

<div style={{backgroundImage:`url(${bg2})`, backgroundSize: "cover",backgroundPosition: "center",
paddingTop: "40px",width: "100%",minHeight: "90vh",}}>

<div className="container ">
<div className="row">
<div className="col-sm-12">
    <div style={{textAlign:"center",background:"white",width:"90%",maxWidth:"700px",height:"550px",margin:"auto",fontSize:"20px",
    paddingTop: "20px",borderRadius: "5px"}}>

        <p><b>Contact Us</b></p>
        <hr style={{width:"90%"}}/>
        <p>Sidon, Lebanon</p>
        <hr style={{width:"90%"}} />
        <p>+961 07 725 325</p>
        <hr style={{width:"90%"}} />
        <p>10:00 AM - 12:00 AM</p>
        <hr style={{width:"90%"}} />
        <p>Instagram:<a href="https://www.instagram.com/alakkadcocktail/" target="_blank"> @alakkadcocktail</a></p>

       <button style={{background:"green", width: "90%",padding: "15px",border: "none",borderRadius: "5px",marginTop: "30px"}}>
        <a href="https://wa.me/9617725325" style={{color:"white",textDecoration:"none",fontSize:"20px"}}> 
        Order on whatsapp</a></button> 
 </div>

    </div>
    </div>
    </div>
</div>
    
);
}
export default Contact;

