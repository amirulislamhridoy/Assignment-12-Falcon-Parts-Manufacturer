import React from "react";

const ManageProductModal = ({deletePrats, setDeleteParts, refetch}) => {
    const handleDelete = parts => {
        fetch(`http://localhost:5000/parts/${parts._id}`, {method: 'DELETE'})
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDeleteParts('')
            refetch()
        })
    }
    
  return (
    <div>
      <input type="checkbox" id="managePartsDelete" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure to Delete. {deletePrats.name}
          </h3>
          <div class="modal-action">
            <button onClick={() => handleDelete(deletePrats)} for="managePartsDelete" class="btn btn-error">
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
