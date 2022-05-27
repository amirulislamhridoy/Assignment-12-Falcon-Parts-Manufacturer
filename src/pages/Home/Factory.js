import React from "react";
import bg from '../../images/factory/factory.jpg'

const Factory = () => {
  return (
    <section>
      <div
        className="hero min-h-screen"
        style={{backgroundImage: `url('${bg}')`}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-red-800 mb-5 text-5xl font-bold">Hello Sir</h1>
            <p className="mb-5 text-yellow-900 font-bold text-xl">
              This is our Factory. We are make all parts of automobiles. And we are seller. But we are don't sell single product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factory;
