import React from 'react'
import './index.css'
import './APP.css'
import { useState } from 'react'

function Product({ naam,age,data }) {
  const [a,b] =useState(true);
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
      <h1>{naam}</h1>
      <h2>{age}</h2>
      <h3>{data.age}</h3>
      <h3>{data.name}</h3>
      <h4 className={`${a === false ? "text-red-600" : "text-green-600"}`}>{a === false ? "hello" : "hey"}</h4>
      <button onClick={() => b(!a)} >change</button>
    </div>
  )
}

export default Product  