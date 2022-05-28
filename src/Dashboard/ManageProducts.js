import React, { useState } from "react";
import { useQuery } from "react-query";
import ManageProductModal from "./ManageProductModal";

const ManageProducts = () => {
    const [deletePrats, setDeleteParts] = useState({})
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://localhost:5000/parts/").then((res) => res.json())
  );

  const handleDeleteParts = (e) => {
    setDeleteParts(e)
  };

  return (
    <div>
      <h2 className="text-3xl text-blue-400 ml-8">Manage Products</h2>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th></th>
              <th>Maximum Quantity</th>
              <th>Minium Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((parts, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={parts.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{parts.name}</div>
                      <div class="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td></td>
                <td>{parts.maximum}</td>
                <td>{parts.minium}</td>
                <td>{parts.price}</td>
                <td>
                <label className="btn btn-error btn-sm" for="managePartsDelete" onClick={() => handleDeleteParts(parts)} class="btn modal-button">Delete</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        {deletePrats && <ManageProductModal deletePrats={deletePrats}></ManageProductModal>}
    </div>
  );
};

export default ManageProducts;
