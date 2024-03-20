import Title from "components/Title";
import React from "react";

function Product() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="text-center">
          <Title
            className="text-black"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
             Features
          </Title>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between gap-3 my-12 relative z-10"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <img
              src="images/cream.png"
              alt=""
              className=" -top-[120%] absolute -left-[40%] -z-10 w-auto h-12 sm:h-[800px]"
            />
          </div>

          <div className=" text-center">
            <img
              src="images/1.png"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto"
            />
            <h3 className="font-dream text-lg py-4 ">
             AI Music <br /> Generator
            </h3>
          </div>
          <div className=" text-center">
            <img
              src="images/2.png"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto"
            />
            <h3 className="font-dream text-lg py-4 ">
      Yield  <br />Farming
            </h3>
          </div>

          <div className=" text-center">
            <img
              src="images/3.png"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto"
            />
            <h3 className="font-dream text-lg py-4 ">
        Concerts
            </h3>
          </div>
          <div className=" text-center">
            <img
              src="images/4.png"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto"
            />
            <h3 className="font-dream text-lg py-4 ">
              NFTs <br />
              Trading Platform
            </h3>
          </div>
        </div>
        <div className="relative flex justify-center ml-0 sm:ml-14">
        
        <a href="/" target="" className=" bg-[#fff] border-2 rounded-3xl py-1 px-4  font-bold text-sm sm:text-2xl font-dream2 ">
              Buy Now
            </a>
        </div>
      </div>
    </section>
  );
}

export default Product;
