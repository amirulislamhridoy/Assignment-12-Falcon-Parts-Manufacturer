import React from "react";
import bg from '../../images/factory/factory.jpg'

const Factory = () => {
  return (
    <section>
      <div
        class="hero min-h-screen"
        style={{backgroundImage: `url('${bg}')`}}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="text-red-800 mb-5 text-5xl font-bold">Hello Sir</h1>
            <p class="mb-5 text-yellow-900 font-bold text-xl">
              This is our Factory. We are make all parts of automobiles. And we are seller. But we are don't sell single product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factory;
