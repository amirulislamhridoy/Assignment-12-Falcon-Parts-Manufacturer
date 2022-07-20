import React from "react";
import { toast } from "react-toastify";

const AddAReview = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const ratings = e.target.ratings.value;
    const rate = {name: name, description, ratings}

    fetch("https://falcon-parts-manufatures.herokuapp.com/review", {
      method: "POST",
      body: JSON.stringify(rate),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        toast.success('Added A Review')
        e.target.reset()
      });
  };
  return (
    <div className="flex flex-col lg:block items-center">
      <h2 className="text-3xl text-blue-400 ml-8">Add A Review</h2>

      <form
        onSubmit={handleFormSubmit}
        class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
      >
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered"
              name="name"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Description"
              class="input input-bordered h-20"
              name="description"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Ratings</span>
            </label>
            <input
              type="text"
              placeholder="Ratings"
              class="input input-bordered"
              name="ratings"
              required
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Add Review</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAReview;
