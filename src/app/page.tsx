"use client";
import React from "react";
import NavigationMenu from "../components/NavigationMenu";
import CountdownTimer from "../components/CountdownTimer";
import TimelineSection from "../components/TimelineSection";
import PhotoGallery from "../components/PhotoGallery";
import EventInformation from "../components/EventInformation";

import GiftsSection from "../components/GiftsSection";

const WeddingLandingPage: React.FC = () => {
  return (
    <main className="rounded-none">
      <div className="flex flex-col items-center mt-1 w-full bg-white max-md:max-w-full">
        <NavigationMenu />

        <img
          src="https://cdn.builder.io/api/v1/image/assets/b6799e19a3ac431ca5f4104ac011ab33/dbcb377b744f479111a4056d61b847e5a08ab9e5?placeholderIfAbsent=true"
          className="object-contain mt-24 w-full aspect-[7.63] max-w-[1033px] max-md:mt-10 max-md:max-w-full"
          alt="Wedding logo"
        />

        <section className="mt-9 text-xl text-center text-black w-[370px]">
          29 DE JUNHO DE 2024
          <br />
          MG–SP
        </section>

        <CountdownTimer />

        <div className="flex shrink-0 self-stretch mt-28 w-full h-1.5 bg-zinc-300 max-md:mt-10 max-md:mr-0.5" />

        <TimelineSection />

        <div className="flex shrink-0 self-stretch mt-14 w-full h-1.5 bg-zinc-300 max-md:mt-10" />

        <PhotoGallery />

        <button className="px-12 py-4 mt-11 max-w-full text-2xl text-white bg-black rounded-2xl w-[213px] max-md:px-5 max-md:mt-10">
          VER MAIS
        </button>

        <div className="flex shrink-0 self-stretch mt-8 w-full h-1.5 bg-zinc-300 max-md:mr-0.5" />

        <EventInformation />

        <div className="flex shrink-0 self-stretch mt-24 w-full h-1.5 bg-zinc-300 max-md:mt-10" />

        <GiftsSection />

        <div className="flex shrink-0 self-stretch mt-72 w-full h-1.5 bg-zinc-300 max-md:mt-10" />

        <img
          src="https://cdn.builder.io/api/v1/image/assets/b6799e19a3ac431ca5f4104ac011ab33/96d083a5b5818fc869d9e64d150c45c37e3b9380?placeholderIfAbsent=true"
          className="object-contain mt-20 ml-2.5 max-w-full aspect-[7.63] w-[473px] max-md:mt-10"
          alt="Wedding footer logo"
        />
      </div>
    </main>
  );
};

export default WeddingLandingPage;
