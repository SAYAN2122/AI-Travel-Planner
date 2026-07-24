import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import PopularDestinations from "../components/home/PopularDestinations";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDestinations />
    </>
  );
}

export default Home;