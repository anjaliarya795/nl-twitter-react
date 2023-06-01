import React, { useContext } from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import { GlobalContext } from '../../App'

function RightSide() {
  return (
    <div className="flex flex-1 flex-col gap-y-12">
        <input type="text" placeholder='Search Twitter' className="bg-gray-900 py-2 rounded-md outline-none placeholder:text-gray-600 text-gray-300" />
        <WhatIsHapenning/>
        <WhoToFollow/>
    </div>
  )
}

export default RightSide


function WhatIsHapenning() {
    const {state} = useContext(GlobalContext)
  return (
    <div className="flex flex-col gap-y-4">
        <p className="text-white text-xl">{state?.data?.trendingData?.title}</p>
        {
            state?.data?.trendingData?.trends?.map((item,i)=>(
                <WhatIsHapenningItem item={item} key={i} />
            ))
        }
        <p className="text-blue-500 text-sm">See more</p>
    </div>
  )
}


function WhatIsHapenningItem({item}) {
  return (
    <div className="gap-y-1 flex flex-col">
        <p className="text-xs text-gray-500">{item.category} &nbsp; - &nbsp;  Trending </p>
        <p className="text-xs text-white">{item.text}</p>
        <p className="text-xs text-gray-500">{item?.tweets} {item?.hashTags?.map(item=>item+' ')} </p>
    </div>
  )
}


function WhoToFollow({item}) {
    const {state} = useContext(GlobalContext)

  return (
    <div className="flex flex-col gap-y-4">
        {
            state?.data?.followData?.usersToFollow?.map((item,i)=>(
                <WhoToFollowItem val={item} key={i} />
            ))
        }
        <p className="text-blue-500 text-sm">See more</p>
    </div>
  )
}


function WhoToFollowItem({val}) {
  return (
    <div className="flex gap-x-2 items-center">
        <img src={val.imageData.url} alt={val.imageData.alt} className='w-[40px] h-[40px] rounded-full' />
        <div className="flex gap-x-2 flex-col items-center">
            <div className="flex gap-x-2 items-center">
                <p className="text-lg text-white">{val.userName}</p>
                <div className="text-blue-500">
                    {val.blueTick && <AiFillCheckCircle />}
                </div>
            </div>
            <p className="text-gray-500">{val.userId}</p>
        </div>
        <button className='ml-auto self-center text-black bg-gray-100 px-4 py-1 rounded-md' >Tweet</button>
    </div>
  )
}


