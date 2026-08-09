import Home from '../Components/Home';
import Features from '../Components/Features';
import Items from '../Components/Items';
import Us from '../Components/Us';
import Contact from '../Components/Contact';
import MovingGallery from '../Components/MovingGallery';

const HomePage = () => {
  return (
    <>
    <MovingGallery/>

      <section id="home">
        <Home />
      </section>

      <section id="shop">
        <Items />
      </section>

      <section id="about">
        <Us />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </>
  );
};

export default HomePage;