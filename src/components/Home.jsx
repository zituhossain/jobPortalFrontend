import CategoryCarousel from "./CategoryCarousel";
import Footer from "./shared/Footer";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";
import Navbar from "./shared/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </>
  );
};

export default Home;
