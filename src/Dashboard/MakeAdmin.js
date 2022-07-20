import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../firebase_init";

const MakeAdmin = () => {
  const [user, loading] = useAuthState(auth);
  // console.log(user)
  const {
    isLoading,
    error,
    data: users, refetch
  } = useQuery(["repoData", user], () =>
    fetch(`https://falcon-parts-manufatures.herokuapp.com/user?email=${user?.email}`,{
      headers :{
        authorization: "Bearer " + localStorage.getItem('accessToken')
      }
    }).then((res) => res.json())
  );
  const handleMakeAdmin = (user) => {
    console.log(user);

    fetch(`https://falcon-parts-manufatures.herokuapp.com/user/${user._id}`, {
      method: "PUT",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        toast.success('You are selected a Admin.')
        refetch()
      });
  };
  return (
    <section>
        <h2  className="text-3xl text-blue-400 ml-8">Make A Admin</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" || (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm btn-outline btn-info"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MakeAdmin;
