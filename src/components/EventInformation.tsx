import React from "react";
import AccommodationSection from "./AccommodationSection";
const EventInformation = () => {
  return (
    <section className="flex flex-col mt-24 w-full max-w-[1178px] max-md:mt-10 max-md:max-w-full">
      <div className="w-full max-w-[1097px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[45%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b6799e19a3ac431ca5f4104ac011ab33/f7f11cb1d702caa3f7c2a4ae3d5f81c76c7198fc?placeholderIfAbsent=true"
              className="object-contain grow w-full aspect-[1.05] max-md:mt-10"
              alt="Event location"
            />
          </div>
          <div className="ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-11 text-2xl text-black max-md:mt-10 max-md:max-w-full">
              <h2 className="font-medium">Informações sobre o grande dia!</h2>
              <div className="flex shrink-0 mt-6 max-w-full bg-zinc-300 h-[3px] w-[413px]" />
              <p className="self-stretch mt-7 max-md:max-w-full">
                29 de junho de 2024
                <br />A realizar-se às 15h
                <br />
                Cerimônia e recepção - Ville La Rochelle
                <br />
                Estrada Municipal do bairro Caioçara 1100
                <br />
                Bairro Caioçara | Jarinu - SP
              </p>
            </div>
          </div>
        </div>
      </div>
      <AccommodationSection />
    </section>
  );
};

export default EventInformation;
