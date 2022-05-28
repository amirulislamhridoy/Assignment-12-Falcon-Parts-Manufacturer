import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = ( user ) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
      const email = user?.email

      if(email){
        axios.get(`http://localhost:5000/admin/${email}`)
        .then(res => {
            // console.log(res.data)
            setAdmin(res.data)
        })
      }
  }, [user]);
  return [admin]
};
export default useAdmin