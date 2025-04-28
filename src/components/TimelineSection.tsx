import React from "react";

interface TimelineEventProps {
  date: string;
  title: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ date, title }) => {
  return (
    <div className="flex flex-col grow items-center text-3xl text-center text-black max-md:mt-10">
      <div className="flex shrink-0 self-stretch bg-black h-[440px] rounded-[128px]" />
      <div className="flex shrink-0 mt-3.5 w-1 bg-zinc-300 h-[99px]" />
      <div className="mt-3.5">
        <span className="text-base">{date}</span>
        <br />
        <span className="text-[29px]">{title}</span>
      </div>
    </div>
  );
};

const TimelineSection = () => {
  return (
    <section className="mt-32 w-full flex justify-center max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="max-md:ml-0 max-md:w-full">
          <h2 className="text-9xl text-black max-md:mt-10 max-md:text-4xl">
            SAVE
            <br />
            THE
            <br />
            DATE!
          </h2>
        </div>
        <div className="ml-5 max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[33%] max-md:ml-0 max-md:w-full">
                <TimelineEvent date="10 April 2018" title="O COMEÇO!" />
              </div>
              <div className="w-[33%] max-md:ml-0 max-md:w-full">
                <TimelineEvent date="10 April 2018" title="O PEDIDO!" />
              </div>
              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center text-3xl text-center text-black max-md:mt-10">
                  <div className="flex shrink-0 bg-black h-[440px] rounded-[128px] w-[196px]" />
                  <div className="flex shrink-0 mt-3.5 w-1 bg-zinc-300 h-[99px]" />
                  <div className="self-stretch mt-3.5">
                    <span className="text-base">10 April 2018</span>
                    <br />
                    <span className="text-[29px]">O CASAMENTO!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
