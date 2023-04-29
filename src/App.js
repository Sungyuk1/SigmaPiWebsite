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
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <LeftImage title={"Chapter House"} text={"This is our new house. It is pretty nice"} name={"House"} image={HousePic}/>
      <RightImage title={"Brotherhood"} text={"We have a pretty nice broterhood"} name={"Brotherhood"} image={Toronto}/>
      <LeftImage title={"Philanthropy"} text={"We donate money"} name={"Philanthropy"} image={dogPic}/>
      <RightImage title={"Social"} text={"We party with women"} name={"Social"}/>
      <LeftImage title={"Sweet Heart"} text={"This is rachel. Ask arron if rachel want different picture on wbesite. This is randomw pictre off her instagram"} name={"Sweet Heart"} image={Rachel1}/>
      <RightImage title={"Rush"} text={"Rush the house"} name={"Rush"} image={rush}/>
      <SocialLinks name={"Links"}/>
    </div>
  );
}

export default App;
