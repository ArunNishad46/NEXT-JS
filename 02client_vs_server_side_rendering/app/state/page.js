'use client';
import React, {useState} from 'react';

export default function Counter(){
  const [count, setCount] = useState(0);

  return(
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <h1 className='text-2xl font-bold pb-2'>Counter {count}</h1>
        <div className='space-x-4'>
          <button onClick={() => setCount((prevCount) => prevCount + 1)} className='bg-blue-600 px-3 py-1.5 rounded-lg cursor-pointer'>Increment</button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)} className='bg-blue-600 px-3 py-1.5 rounded-lg cursor-pointer'>Decrement</button>
      </div>
    </div>
  )
}