import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = ( user ) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
      const email = user?.email

      if(email){
        axios.get(`https://falcon-parts-manufatures.herokuapp.com/admin/${email}`)
        .then(res => {
            // console.log(res.data.admin)
            setAdmin(res.data.admin)
        })
      }
  }, [user]);
  return [admin]
};
export default useAdmin