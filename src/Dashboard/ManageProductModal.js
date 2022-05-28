import React from "react";

const ManageProductModal = ({deletePrats}) => {
    const handleDelete = parts => {
        
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
