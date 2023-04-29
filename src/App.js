import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Contact from "./components/Contact";
import LeftImage from "./components/LeftImage";
import RightImage from "./components/RightImage";
import HousePic from "./assets/House Picture.jpg"
import Toronto from "./assets/Guys in toronto.jpg"
import signPic from "./assets/Sign.jpg"
import dogPic from "./assets/philantro.jpg"
import rush from "./assets/rush.jpg"
import Rachel1 from "./assets/Rachel1.jpg"
import Volleyball2 from "./assets/Volleyball2.jpg"
import trophy from "./assets/trophy.jpg"

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <LeftImage title={"Chapter House"} text={"Our brand new chapter house is located on 251 W Grand River. It is newley renovated and can house up to 40 brothers. \n We have chef and kitchen for those choosing to live in the house"} name={"House"} image={HousePic}/>
      <RightImage title={"Brotherhood"} text={"We value our"} name={"Brotherhood"} image={Toronto}/>
      <LeftImage title={"Philanthropy"} text={"We hold multiple Philanthropy events throughout the school year to help better our community. \n Some of our most popular Philanthropy events include Fight Night, our annual Volleyball Tournament, and our Pinball Petes fundraiser"} name={"Philanthropy"} image={Volleyball2}/>
      <RightImage title={"Social"} text={"We hold multiple socials every week for our brotherhood. \n We hold tailgates during football season as well. \n Our hardworking social chairs make sure that there is never a dull moment during the school year. "} name={"Social"}/>
      <LeftImage title={"Sweet Heart"} text={"This is rachel. Ask arron if rachel want different picture on wbesite. This is randomw pictre off her instagram"} name={"Sweet Heart"} image={Rachel1}/>
      <RightImage title={"Rush"} text={"If you are interested in rushing the house please reach out to our rush chair Dan Hughes. \n Also please feel free to DM us on instagra as well."} name={"Rush"} image={rush}/>
      <SocialLinks name={"Links"}/>
    </div>
  );
}

export default App;
