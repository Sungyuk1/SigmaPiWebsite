import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Contact from "./components/Contact";
import LeftImage from "./components/LeftImage";
import RightImage from "./components/RightImage";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <LeftImage title={"Chapter House"} text={"afj;afj;afja;dfj;afjd;adfj"} name={"House"}/>
      <RightImage title={"Brotherhood"} text={"afj;afj;afja;dfj;afjd;adfj"} name={"Brotherhood"} />
      <LeftImage title={"Philanthropy"} text={"afj;afj;afja;dfj;afjd;adfj"} name={"Philanthropy"}/>
      <RightImage title={"Social"} text={"afj;afj;afja;dfj;afjd;adfj"} name={"Social"}/>
      <LeftImage title={"Sweet Heart"} text={"afj;afj;afja;dfj;afjd;adfj"} name={"Sweet Heart"}/>
      <RightImage title={"Rush"} text={"afj;afj;afja;dfj;afjd;adfj"} name={"Rush"}/>
      
    </div>
  );
}

export default App;
