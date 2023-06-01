import React, { useContext } from 'react'
import {FaRegComment} from 'react-icons/fa'
import {FiRefreshCcw} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import {RiBarChartBoxLine} from 'react-icons/ri'
import {AiFillCheckCircle} from 'react-icons/ai'
import { GlobalContext } from '../../App'
import { Actions } from '../../reducer/fetchData'
function FeedItem({val}) {

const date = new Date(val.tweetTime);
const options = {
    month: 'short', // Abbreviated month name
    day: '2-digit', // Two-digit day of the month
  };
  const {state,dispatch} = useContext(GlobalContext)
  
  const formattedDate = date.toLocaleString('en-US', options); // Output: "May 31"

  function handleLike(id){
    console.log(id)
    const temp = [...state.data.tweetThreads]
    temp?.forEach((item,i)=>{
        item.forEach((val,valId)=>{
            // val['__id__'] = `${i}_${valId}`
            if(val['__id__']===id){
                if(val['__isCurrentUserLiked__']){
                    val['__isCurrentUserLiked__'] = false
                    val['likes'] = val['likes'] <= 1 ? 0 :val['likes']-1 
                }else{
                    val['likes'] = val['likes']+1
                    val['__isCurrentUserLiked__'] = true
                }
                    console.log('match',val['__isCurrentUserLiked__'])
            }else{
                console.log('not match')
            }
      })
    })
    dispatch({type:Actions.Like,payload:temp})
  }

  return (
    <div className="flex flex-1 gap-x-1 overflow-hidden">
        <div className="flex flex-1 gap-x-2 items-start">
            <img src={val.user.imageData.url} alt={val.user.imageData.alt} className='w-[40px] h-[40px] rounded-full' />
            <div className="flex flex-col">
                <div className="flex gap-x-2 items-center">
                    <p className="text-lg text-white">{val.user.userName}</p>
                    <div className="text-blue-500">
                        { val.user.blueTick && <AiFillCheckCircle />}
                    </div>
                    <p className="text-gray-500">{val.user.userId} &nbsp; - &nbsp; {formattedDate}</p>
                </div>
                <p className="text-sm text-gray-300">{val.textArea}</p>
                <div className="mt-4 flex gap-x-4">
                    <div className="flex gap-x-2 items-center text-gray-600">
                        <FaRegComment />
                        <p className="">{val.replies}</p>
                    </div>
                    <div className="flex gap-x-2 items-center text-gray-600">
                        <FiRefreshCcw/>
                        <p className="">{val.reTweets}</p>
                    </div>
                    <div className="flex gap-x-2 items-center text-gray-600">
                        {
                            val.__isCurrentUserLiked__ ?
                            <div className="text-blue-500">
                                <AiFillHeart  onClick={()=>handleLike(val.__id__)} />
                            </div>
                            :
                            <AiOutlineHeart onClick={()=>handleLike(val.__id__)} />
                        }
                        <p className="">{val.likes}</p>
                    </div>
                    <div className="flex gap-x-2 items-center text-gray-600">
                        <RiBarChartBoxLine/>
                        <p className="">{val.views}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default FeedItem