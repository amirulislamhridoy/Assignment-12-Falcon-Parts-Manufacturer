import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('')
console.log(user)
    useEffect(() => {
        const email = user?.user?.email
        if(email){
            fetch(`https://work-wk4e.onrender.com/token?email=${email}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.token)
                setToken(data.token)
            })
        }
    }, [user])
    return [token]
}
export default useToken