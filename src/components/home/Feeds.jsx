import React, { useContext } from 'react'
import TweetTextBox from './TweetTextBox'
import FeedItem from './FeedItem'
import { GlobalContext } from '../../App'

function Feeds() {
    const {state} = useContext(GlobalContext)
    
  return (
    <div className="flex flex-1 flex-col gap-y-4">
        <div className="mb-2 text-white text-lg">{state?.data?.headerData?.title.text}</div>
        <TweetTextBox/>
        {
            state?.data?.tweetThreads?.map((item,i)=>{
                return item.map((val,valId)=>(
                    <FeedItem val={val} key={val.__id__} />
                ))
            })
        }
    </div>
  )
}

export default Feeds