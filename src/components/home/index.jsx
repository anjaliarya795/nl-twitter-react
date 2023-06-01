import React from 'react'
import SideBar from '../sidebar'
import Feeds from './Feeds'
import RightSide from './RightSide'

function Home() {
  return (
    <div className="w-screen min-h-[100vh] bg-black pt-4">
      <div className="container mx-auto">
        <div className="flex flex-row gap-x-8">
          <div className="w-2/12 ">
            <SideBar/>
          </div>
          <div className="w-7/12 border-gray-800 border-x-2 p-4">
            <Feeds/>
          </div>
          <div className="w-3/12 ">
            <RightSide/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home