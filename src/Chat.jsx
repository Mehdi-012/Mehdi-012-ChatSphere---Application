import React, { useEffect, useState } from 'react'

const Chat = ({socket,username,room}) => {
    const [messages, setMessages] = useState([]);
    //const [messageText, setMessageText] = useState('');
    // const [username, setUsername] = useState('');
    const [currentMsg , setCurrentMsg] = useState('')

   const sendMessage = async() => {
      if (currentMsg !== "") {
         const DataMsg = {
          user : username,
          message : currentMsg,
          room : room,
         }
         await socket.emit('send-msg',DataMsg)
         setMessages((list ) => [...list, DataMsg]);
        //  console.log(messages)
         setCurrentMsg("");
      }
      };



    useEffect(() => {
      socket?.on("chat", (data ) => {
        // console.log(data)
        setMessages((list) => [...list, data]);

      });

      socket.emit("newuser",username)



    }, [socket,username ]);



  return (
    <div className="fixed w-full h-full  max-h-[600px]  border-x border-solid border-[#eee]">
            <div className="bg-indigo-400 h-[50px] flex justify-between items-center py-1 px-5">
              <div className="text-[#eee] text-xl font-semibold">ChatRoom</div>
              <button className="py-2 px-3 text-xl cursor-pointer outline-none border border-[#eee] border-solid bg-transparent text-[#eee]">Exit</button>
            </div>

              { messages.map((message ,idx)=>{
               return (
               <div key={idx} className=" w-full h-fit bg-[#f5f5f5] overflow-auto">
                    <div  className={`flex p-3 ${username === message.user ? "justify-end" : "justify-start" }`}>
                      <div className="max-w-[80%] bg-[#fff] shadow-md p-3 ">
                        
<div className="text-xl text-[#555] mb-1">{username === message.user ? "you" : message.user } :</div>
                          <div className="break-words">{message.message}</div>
                      </div>
                    </div> 
              </div>)
              })}



            

            <div className="w-full h-12 flex">
              <input type="text" value={currentMsg} placeholder='write here ...' onChange={(e) => setCurrentMsg(e.target.value)} className="flex-1 h-12 text-xl"/>
              <button  onClick={sendMessage} className="w-20 h-full bg-indigo-400 text-[#eee] text-xl outline-none border-none cursor-pointer">Send</button>
          </div>
          </div>

  )
}

export default Chat
﻿
