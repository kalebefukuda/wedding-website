import React from "react";

const PhotoGallery = () => {
  return (
    <section className="mt-5 w-full max-w-[1178px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[27%] max-md:ml-0 max-md:w-full">
          <div className="flex shrink-0 mx-auto max-w-full bg-black h-[702px] rounded-[39px] w-[317px] max-md:mt-3" />
        </div>
        <div className="ml-5 w-[73%] max-md:ml-0 max-md:w-full">
          <div className="w-full max-md:mt-3 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[32%] max-md:ml-0 max-md:w-full">
                  <div className="flex shrink-0 mx-auto max-w-full bg-black h-[283px] rounded-[39px] w-[264px] max-md:mt-3" />
                </div>
                <div className="ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                  <div className="flex shrink-0 mx-auto mt-1.5 max-w-full bg-black h-[283px] rounded-[39px] w-[573px] max-md:mt-4" />
                </div>
              </div>
            </div>
            <div className="mt-3.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[31%] max-md:ml-0 max-md:w-full">
                  <div className="flex shrink-0 mx-auto mt-1 w-64 max-w-full bg-black h-[397px] rounded-[39px] max-md:mt-4" />
                </div>
                <div className="ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                  <div className="flex shrink-0 mx-auto bg-black h-[398px] rounded-[39px] w-[215px] max-md:mt-4" />
                </div>
                <div className="ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                  <div className="flex shrink-0 mx-auto max-w-full bg-black h-[401px] rounded-[39px] w-[354px] max-md:mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
