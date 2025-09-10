import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import Review from "../components/Review";

function Userhome() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Latest />
        <Review />
        <Footer />
      </div>
    </>
  );
}

export default Userhome;
