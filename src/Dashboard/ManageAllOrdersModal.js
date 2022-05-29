import React from "react";

const ManageAllOrdersModal = ({deleteOrder, setDeleteOrder}) => {
    const handleDelete = parts => {
        // console.log(parts)
        setDeleteOrder('')
    }
  return (
    <div>
      <div class="modal" id="adminDelete">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure for Delete ?
          </h3>
          <div class="modal-action">
              <button onClick={() => handleDelete(deleteOrder)} className='btn btn-error'>Delete</button>
            <a href="#" class="btn">
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrdersModal;
