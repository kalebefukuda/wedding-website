import React from "react";

const AccommodationSection = () => {
  return (
    <div className="flex gap-7 self-end mt-9 w-full text-2xl font-semibold text-black whitespace-nowrap max-w-[1058px] max-md:max-w-full">
      <h3 className="grow my-auto">HOSPEAGEM</h3>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/b6799e19a3ac431ca5f4104ac011ab33/7caed135655e39f3acab414405851c978adb895b?placeholderIfAbsent=true"
        className="object-contain shrink-0 my-auto max-w-full aspect-[22.73] w-[181px]"
        alt="Accommodation divider"
      />
      <div className="flex shrink-0 bg-black rounded-3xl h-[175px] w-[129px]" />
      <div className="flex shrink-0 bg-black rounded-3xl h-[175px] w-[129px]" />
      <div className="flex shrink-0 bg-black rounded-3xl h-[175px] w-[129px]" />
      <div className="flex shrink-0 bg-black rounded-3xl h-[175px] w-[129px]" />
    </div>
  );
};

export default AccommodationSection;
