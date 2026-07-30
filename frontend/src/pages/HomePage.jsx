import Home from "../Components/Home";
import Features from "../Components/Features";
import Items from "../Components/Items";
import Us from "../Components/Us";
import Contact from "../Components/Contact";
import MovingGallery from "../Components/MovingGallery";

const HomePage = () => {
  return (
    <>
    <MovingGallery/>
      <Home />
      
      <Items />
      <Us />
      <Contact />
    </>
  );
};

export default HomePage;