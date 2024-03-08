import React, { useState } from 'react'
import  io from "socket.io-client"
import Chat from './Chat'


const socket = io("http://localhost:5000")



const Join = () => {
    const [username,setUsername] = useState("")
    const room = 1
    const [showChat, setShowChat] = useState(false);
   

    const sendUserToRoom = () => {
        socket.emit('newuser', username);
        setUsername(username)
        socket.emit('join-room',room)
        setShowChat(true);
        
      };
  return (
    <div className=" w-full h-full  max-h-[600px] bg-indigo-500 border-x border-solid border-[#eee]">
      {!showChat ? (
    <div className=" w-full h-full" >
      <div className=" absolute top-[50%] left-[50%] w-[80%] max-w-[ -translate-x-2/4 -translate-y-1/2">
        <h2 className="mb-[20px] text-3xl font-bold font-serif text-indigo-400 px-0 py-1 inline-block border-b-4 border-solid border-indigo-500">Welcome to live chat</h2>
          <div className="w-full mx-0 my-[20px]">
            <label className="block mb-1" htmlFor="username">Username</label>
            <input className="w-1/2 p-2 border border-solid border-black text-xl" type="text" value={username} onChange={(e)=> setUsername(e.target.value)} id="username" name="username"/>
          </div>
          <div>
            <button onClick={sendUserToRoom} className="px-5 py-2 bg-indigo-500 cursor-pointer text-xl outline-none- border-none text-white">Click here &#9658;</button>
          </div>

      </div> 

    </div>
    ) : (
      <Chat socket={socket} room={1} username={username}/>
      )}
 </div>
  )
}

export default Join
