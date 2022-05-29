import React from "react";

const MyOrderRowModal = ({perOrder, refetch, setPerOrder}) => {

    const handleDelete = order => {
        fetch(`https://work-wk4e.onrender.com/order/${order._id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
            setPerOrder('')
        })
    }
    console.log(perOrder)
  return (
    <div class="modal" id="ordermodal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Are you sure to delete. {perOrder.orderName}</h3>
        {/* <div class="avatar">
            <div class="w-24 mask mask-squircle">
            <img src={perOrder.img} alt="" />
            </div>
          </div> */}
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
