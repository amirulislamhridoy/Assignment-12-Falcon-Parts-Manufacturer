import React from 'react';

const MyOrderRow = ({setPerOrder, order, index}) => {
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{order.orderName}</td>
        <td>{order.address}</td>
        <td>{order.number}</td>
        <td>{order.quantity}</td>
        <td>
        <a href="#ordermodal" onClick={() => setPerOrder(order)} class="btn btn-sm btn-error text-white">Delete</a>
        </td>
      </tr>
    );
};

export default MyOrderRow;