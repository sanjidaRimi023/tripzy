import BannerSection from "./components/customs/banner";
import Footer from "./components/shared/footer";
import Navbar from "./components/shared/navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
        <BannerSection/>
      </div>
    <Footer/>

    </>
  );
}
