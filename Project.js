import React from "react";
import "./project.css";
import IMG1 from "./images/image1.jpg";
import { FaSearchengin } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";
import { LuNotebookPen } from "react-icons/lu";

import IMG3 from "./images/image3.webp";
import IMG4 from "./images/image4.webp";
import IMG9 from "./images/image5.jpg";
import IMG6 from "./images/image6.jpg";
import IMG7 from "./images/image7.jpg";
import IMG8 from "./images/image8.webp";
import IMG5 from "./images/image9.jpg";
import IMG10 from "./images/image10.jpg";
import IMG11 from "./images/image11.webp";
import IMG12 from "./images/image12.jpg";
import IMG13 from "./images/image13.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
const Project = () => {
  return (
    <div className="project">
    <nav className="navbari">

        <div className="logo">
            Logo
        </div>
    <ul className="pages">
  <li className="home"><a href="#">home</a></li>
  <li className="contact"><a href="#">Contact</a></li>
  <li className="about"><a href="#">About</a></li>
</ul>
    </nav>
    <div className="page1">
        <img src={IMG1} alt="image1" className="image1"/>
        <div className="text1">ABOUT US</div>
        <div className="text2">Architecture, Engineering & Design Firm
            </div>   
            <div className="text3">
            We are the authority for completing construction projects in environmentally sensitive surroundings.
            </div>
<button className="button1">
    READ MORE
</button>

<div className="card1"> 
    <div className="round1">
        <FaSearchengin  className="search"/>
        <div className="text4">ANALYSIS</div>
       <div className="text5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
       <button className="button2">MORE</button>
        </div>
</div>
<div className="card2">
<div className="round1">
<GrDocumentText className="search" />
        <div className="text6">Planning</div>
       <div className="text7">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
       <button className="button3">MORE</button>
        </div>
</div>
<div className="card3">
<div className="round1">
<LuNotebookPen className="search"/>
        <div className="text8">DESIGN</div>
       <div className="text9">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</div>
       <button className="button4">MORE</button>
        </div>
</div>


             </div>
<div className="page2">
<div className="title1">Meet the <spam className="colorchange1">team</spam></div>
<div className="text10">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
<img src={IMG3} alt="image3" className="image3"/>
<img src={IMG4} alt="image4" className="image4"/>
<div className="colorframe"></div>
<div className="text11"> WELCOME TO</div>
<div className="text12">Construction Company</div>
<div className="colorframe2"></div>
<div className="text13">We are the leader with 25 years of experiencein the construction market!</div>
<div className="text14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus eleifend.
     Nullam ornare sapien quis vulputate cursus. Vivamus vel pellentesque purus, sed dignissim elit. Maecenas ac augue metus.
      Suspendisse
                                    in elit nibh. Vestibulum in nibh risus. Phasellus ut cursus sem. Vestibulum feugiat eros lorem, 
                                    vitae faucibus arcu aliquam ac. Sed tempor, arcu non sodales gravida, sapien dui iaculis felis, 
                                    vel luctus sapien nisi
                                    non orci. Ut laoreet ante tellus, vel hendrerit lorem tincidunt sed. Etiam rhoncus euismod velit
                                     ac rutrum.</div>
 <div className="text15">Donec porttitor turpis eu mi tempus facilisis. Maecenas id ullamcorper elit, quis tempus enim. In dignissim
 dolor in accumsan tincidunt. Donec vel diam vitae risus elementum congue. Cras varius, enim vitae condimentum mattis, erat lacus.</div>

<button className="button5">LEARN MORE</button>
<div className="colorframe3"></div>
<div className="text16">How We Work</div>
<div className="text17">Viverra nam libero justo laoreet sit. Nisl nunc mi ipsum faucibus. Ut ornare lectus sit amet est placerat in egestas. Felis donec et odio pellentesque. Eget arcu dictum varius duis at consectetur lorem donec massa. Vitae auctor eu augue ut lectus arcu bibendum at varius.
     Tellus pellentesque eu tincidunt tortor aliquam nulla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit</div>
<div className="colorframe4"></div>
<img src={IMG5} alt="image5" className="image5"/>
<img src={IMG6} alt="image6" className="image6"/>
<img src={IMG7} alt="image7" className="image7"/>
<img src={IMG8} alt="image8" className="image8"/>
<img src={IMG9} alt="image9" className="image9"/>
<img src={IMG10} alt="image10" className="image10"/>
<div className="page6"></div> 
<div className="colorframe5"></div>
<img src={IMG11} alt="image11" className="image11"/>
<div className="card4"></div>
<div className="text18">Build With Us</div>
<div className="text19">Our vision is to inspire an organization of professionals to complete high-value,
     high-quality projects that positively impact communities — and it is our approach and our culture that sets us apart.</div>

<button className="button6">CONTACT US</button>
<div className="text20">Eget egestas purus viverra accumsan in nisl nisi. Viverra ipsum nunc aliquet bibendum enim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. 
    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Id semper risus in hendrerit. </div>
    <button className="button7">LEARN MORE</button>
    <div className="page7"></div>
    <div className="text21">Expert, Efficient, Collaborative.
    Build With Experience</div>
    <img src={IMG12} alt="image12" className="image12"/>
    <img src={IMG13} alt="image13" className="image13"/>
   
    <div className="card5"></div>
<div className="ring"></div>
<div className="text22">Our Vision</div>
<div className="text23">We thrive on new challenges and are at our best
     when a project is technically or logistically demanding and requires smart planning.</div>
<button className="button8">LEARN MORE</button>
<div className="page9"></div>
<div className="colorframe6"></div>
<div className="card6"></div>


<div className="copyright">
        <div className="copyrighttext">@ Copyright Subx. All right reserved</div>
       </div>





<div className="container">
        <div className="info">
            <p className="text24"><span className="round5"><FaMapMarkerAlt /></span>121 Rock Street, 21 Avenue, New York, NY 92103-9000</p>
            <p className="text25"><span className="round6"><BsTelephoneFill /></span>1 (234) 567-8911 (234) 987-654</p>
            <p className="text26"><span className="round7"><MdAccessTimeFilled /></span>Mon - Fri ...... 10 am - 8 pm Sat, Sun ...... Closed</p>
        </div>
        <div className="form">
            <form>
                <input className="input1" type="text" placeholder="Enter your Name" required/>
                <input className="input2" type="email" placeholder="Enter a valid email address" required/>
                <textarea className="placeholder1" placeholder="Enter your message" rows="5" required></textarea>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    </div>
</div>





</div>

  
  );
};

export default Project;