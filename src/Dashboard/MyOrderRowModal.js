import React from "react";

const MyOrderRowModal = ({perOrder, refetch, setPerOrder}) => {

    const handleDelete = order => {
        fetch(`http://localhost:5000/order/${order._id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
            setPerOrder('')
        })
    }
  return (
    <div class="modal" id="ordermodal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Are you sure to delete. {perOrder.orderName}</h3>
        <div class="modal-action">
            <button onClick={() => handleDelete(perOrder)} className='btn btn-error text-white'>Delete</button>
          <a href="#" class="btn">
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyOrderRowModal;
