import React, { useEffect, useState } from 'react';
import ManageAllOrdersModal from './ManageAllOrdersModal';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const [deleteOrder, setDeleteOrder] = useState({})

    useEffect( () => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    // console.log(orders)
    return (
        <div>
            <h2 className="text-3xl text-blue-400 ml-8">Manage All Orders</h2>


            <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Parts Name</th>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>Per Price</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((parts, index) => (
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
                      <div class="font-bold">{parts.orderName}</div>
                      <div class="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td></td>
                <td>{parts.name}</td>
                <td>{parts.email}</td>
                <td>{parts.quantity}</td>
                <td>{parts.price}</td>
                <td>{parts.number}</td>
                <td>
                <a href="#adminDelete" class="btn"  onClick={() => setDeleteOrder(parts)} className="btn modal-button btn-error btn-sm">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && <ManageAllOrdersModal deleteOrder={deleteOrder} setDeleteOrder={setDeleteOrder}></ManageAllOrdersModal>}
        </div>
    );
};

export default ManageAllOrders;