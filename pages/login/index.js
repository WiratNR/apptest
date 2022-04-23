import React, { useState, useEffect } from 'react'

export default function index() {

    const [email, setEmail] = useState('')

    useEffect( ()=>{
        res()
       
    }, [])

    const res = async () => {
        await fetch('https://www.mecallapi.com/api/users')
        .then(res => res.json())
        .then( data => console.log(data))
    }
 
  return (
    <div>
        <div>email</div>
        <input value={email} lable="email" onChange={(e)=> setEmail(e.target.value)} />
        
    </div>
  )
}
