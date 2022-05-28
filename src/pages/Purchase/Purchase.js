import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams()
//     const { isLoading, error, data } = useQuery('parts', () =>
//      fetch(`http://localhost:5000/parts/${id}`).then(res =>
//        res.json()
//      )
//    )
    return (
        <section>
            
        </section>
    );
};

export default Purchase;