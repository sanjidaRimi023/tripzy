import React from "react";
import ReusableBtn from "../shared/reusable-btn";

const BannerSection = () => {
  return (
    <>
      <section className="bg-[url('/image1.jpg')] h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center text-center flex-col text-white space-y-2 mb-10">
        <h1 className="text-5xl font-bold">We Find The Best Tours For You</h1>
        <p className="text-lg font-semibold">
          “Discover destinations, build your itinerary, and book trusted local
          guides - all in one place.”
        </p>
        <ReusableBtn text="start planings" />
      </section>
    </>
  );
};

export default BannerSection;
