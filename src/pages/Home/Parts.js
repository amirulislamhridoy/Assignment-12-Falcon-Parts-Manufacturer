import React, { useEffect, useState } from "react";

const Parts = () => {
  const [parts, setParts] = useState([]);
  console.log(parts);
  useEffect(() => {
    fetch("http://localhost:5000/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mt-10 mb-4 text-primary">Car Parts </h2>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {parts.map((part) => (
          <div>
            <div class="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src={part.img} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="text-2xl font-bold">{part.name}</h2>
                <p>{part.description}</p>
                <p>Minium: {part.minium}</p>
                <p>Maximum: {part.maximum}</p>
                <h2 className="card-title">Price: {part.price}</h2>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">purchase</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Parts;
