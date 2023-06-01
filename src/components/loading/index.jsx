import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'

function Loading() {
  return (
    <div className="w-screen min-h-[100vh] flex justify-center items-center bg-black pt-4">
        <div className="text-blue-500 flex-col">
            <AiOutlineTwitter size={60} />
            <p className="text-white text-xl">Loading ...</p>
        </div>
    </div>
  )
}

export default Loading