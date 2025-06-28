import React from 'react'
//rfce

function Card(props) {
  console.log(props.channel);
  return (
    <div>
       <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-4">
        <img
          src={props.src}alt=""
          className="object-cover object-center w-full rounded-xl h-72 bg-gray-500 "
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            title:{props.channel}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <p className="text-gray-300">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sapiente architecto delectus placeat ipsa rerum numquam eius culpa ullam obcaecati!
        </p>
        <button className=" bg-white border-3 border-white  rounded-lg text-black px-3 py-2 ">{props.btnText}</button>
      </div>
        
    </div>
  )
}

export default Card
