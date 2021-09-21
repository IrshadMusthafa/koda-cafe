import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/koda3.jpg";
import "../styles/Home.css";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image33 from "../assets/33.png";
import image4 from "../assets/4.png";


function Home() {
  
  return (
  <div class="main">
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      
      <div className="headerContainer">
        <h1> kodacafe </h1>
        <p> Experiance The Great Food...</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
      </div>
      
      
					<div class="col-md-3 col-sm-6 col-xs-6 service-item wow slideInLeft " data-wow-offset="50" data-wow-delay=".20s" >
						<div class="service-inner" >
							<div class="service-thumb"><center>
								<img src={image1} alt="food-service" height="10%" width="15%" />
                <img src={image2} alt="food-service" height="10%" width="15%" />
                <img src={image33} alt="food-service" height="10%" width="15%" />
                <img src={image4} alt="food-service" height="10%" width="15%" />
                {/* <div class="service"> */}
								{/* <h4  >Choose your favorite </h4> <h4>We deliver your meals</h4>
                 */}
                </center>
              </div>
              </div>
    
    </div>
    <div >
{/* <h2 >We Serve Passion</h2>  */}
      
    </div>
     </div>
       
  );
}

export default Home;
