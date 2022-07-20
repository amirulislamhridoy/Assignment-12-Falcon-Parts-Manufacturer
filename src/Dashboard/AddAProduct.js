import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const imgKey = "05393766d640d7ebf0a5d7336f2e7a1c";

const AddAProduct = () => {
  const { register, handleSubmit, reset} = useForm();
  const onSubmit = (data) => {
    // console.log(data)
    let parts = {
      name: data.name,
      description: data.description,
      maximum: data.maximum,
      minium: data.minium,
      price: data.price
    }

    const formData = new FormData();
    formData.append("image", data.photo[0]);

    fetch(`https://api.imgbb.com/1/upload?key=${imgKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const imgLink = data.data.url;
        parts.img = imgLink

        fetch(`https://falcon-parts-manufatures.herokuapp.com/parts`, {
          method: "POST",
          body: JSON.stringify(parts),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json)
            toast.success('You are add A Parts and Parts data.')
            reset()
          });
      });
  };
  return (
    <div className="flex flex-col items-center lg:block">
      <h2 className="text-3xl text-blue-400 ml-8">Add A Parts</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
      >
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Parts Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Parts Name"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Description</span>
            </label>
            <input
              {...register("description")}
              type="text"
              placeholder="Description"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Available Quantity</span>
            </label>
            <input
              {...register("maximum")}
              type="number"
              placeholder="Available Quantity"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Minium Quantity</span>
            </label>
            <input
              {...register("minium")}
              type="number"
              placeholder="Minium Quantity"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Photo</span>
            </label>
            <input
              {...register("photo")}
              type="file"
              placeholder="Photo"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Price</span>
            </label>
            <input
              {...register("price")}
              type="number"
              placeholder="Price"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Parts"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAProduct;
