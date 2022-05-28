import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase_init";
import { toast } from "react-toastify";

const Purchase = () => {
  const { id } = useParams();
  const [user, loading, uError] = useAuthState(auth);
  const [quantity, setQuantity] = useState("");
  const { isLoading, error, data } = useQuery("parts", () =>
    fetch(`http://localhost:5000/parts/${id}`).then((res) => res.json())
  );
//   console.log(data)
  let [quantityError, setQuantityError] = useState("");
  const handleQuantity = (e) => {
    let value = +e.target.value;

    if (value < +data.minium) {
      value = data.minium;
      setQuantityError("Your quantity is will be minium " + data.minium);
    } else if (value > +data.maximum) {
      value = data.maximum;
      setQuantityError("Your quantity is will be maximum " + data.maximum);
    } else {
      setQuantityError("");
    }
    // console.log(quantityError)
    setQuantity(value);
  };
  const handleFromSubmit = (e) => {
    e.preventDefault();
    const name = user.displayName;
    const email = user.email;
    const address = e.target.address.value;
    const number = e.target.number.value;

    if (quantityError.length < 2) {
        const data = {name, email, address, number, quantity}
    //   console.log(data)
      fetch("http://localhost:5000/order", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            toast.success('Your Purchase is successful.')
            e.target.reset()
        });
    }
  };
  return (
    <section className="flex justify-center flex-col items-center">
      <h2 className="text-4xl font-extrabold text-red-700">{data.name}</h2>

      <form
        class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        onSubmit={handleFromSubmit}
      >
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="ail"
              class="input input-bordered"
              value={user.displayName}
              disabled
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="ail"
              class="input input-bordered"
              value={user.email}
              disabled
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Address"
              class="input input-bordered"
              name="address"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              class="input input-bordered"
              name="number"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Quantity</span>
            </label>
            <input
              onChange={(e) => handleQuantity(e)}
              type="number"
              placeholder="Quantity"
              class="input input-bordered"
              name="quantity"
              required
            />
          </div>
          <p className="text-red-600">{quantityError}</p>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Purchase</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Purchase;
