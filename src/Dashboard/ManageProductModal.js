import React from "react";

const ManageProductModal = ({ deleteParts, setDeleteParts, refetch }) => {
  const handleDelete = (parts) => {
    fetch(`https://work-wk4e.onrender.com/parts/${parts._id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDeleteParts("");
        refetch();
      });
  };
  // console.log(deleteParts);
  return (
    <div>
      <input type="checkbox" id="managePartsDelete" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure to Delete ? {deleteParts.name}
          </h3>
          <div class="avatar">
            <div class="w-24 mask mask-squircle">
            <img src={deleteParts.img} alt="" />
            </div>
          </div>
          
          <div class="modal-action">
            <button
              onClick={() => handleDelete(deleteParts)}
              for="managePartsDelete"
              class="btn btn-error"
            >
              Delete
            </button>
            <label for="managePartsDelete" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductModal;
