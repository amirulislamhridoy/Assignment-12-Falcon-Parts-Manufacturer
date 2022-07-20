import React from "react";
import { toast } from "react-toastify";

const ManageAllOrdersModal = ({deleteOrder, setDeleteOrder, refetch}) => {
    const handleDelete = parts => {

        fetch(`https://falcon-parts-manufatures.herokuapp.com/order/${parts._id}`, {method: 'DELETE'})
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setDeleteOrder('')
          toast.success('You are delete a Parts.')
          refetch()
        })
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
