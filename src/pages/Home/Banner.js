import React from "react";
import meter from "../../images/banner/meter.jpg";
import tayarFrame from "../../images/banner/taray-fram.jpg";
import tayar from "../../images/banner/tayar.jpg";

const Banner = () => {
  return (
    <section>
      <div class="carousel w-full " style={{ height: "calc(100vh - 64px)" }}>
        <div id="slide1" class="carousel-item relative w-full">
          <img src={tayar} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src={meter} class="w-full" alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src={tayarFrame} class="w-full" alt="" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
