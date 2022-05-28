import React, { useState } from 'react';
import { useQuery } from 'react-query';
import MyOrderRow from './MyOrderRow';
import MyOrderRowModal from './MyOrderRowModal';

const MyOrders = () => {
    const [perOrder, setPerOrder] = useState({})
    const { isLoading, error, data: orders, refetch } = useQuery('repoData', () =>
     fetch('http://localhost:5000/order').then(res =>
       res.json()
     )
   )
   
    return (
        <div>
            <div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
       {orders?.map((order, index) => <MyOrderRow setPerOrder={setPerOrder} order={order} index={index} key={index}></MyOrderRow>)}
    </tbody>
  </table>
  {perOrder &&  <MyOrderRowModal perOrder={perOrder} refetch={refetch} setPerOrder={setPerOrder}></MyOrderRowModal>}
</div>
        </div>
    );
};

export default MyOrders;