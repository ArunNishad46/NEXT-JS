'use client'

function Example() {
  return (
    <div className="flex flex-col p-10 gap-4">
      <button onClick={() => alert("Thank You!")} className="bg-blue-600 p-1.5 rounded-lg cursor-pointer">Click Me</button>
      <input onChange={(e) => console.log(e.target.value)} className="bg-gray-100 p-1.5 text-gray-600 rounded-lg" type="text" placeholder="Type here..." />
    </div>
  )
}

export default Example