import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../App'
import { Actions } from '../../reducer/fetchData'

function TweetTextBox() {
    const {state,dispatch} = useContext(GlobalContext)
    const [text,setText] = useState('')

    const handleTweet = () => {
        if(!text){
            alert('Tweet cannot be empty !')
            return 
        }
        const data = [
            [
                {
                    user: {
                        ...state.data.loggedInUser,
                    },
                    "tweetTime": new Date().getTime(),
                    "textArea": text,
                    "replies": 0,
                    "reTweets": 0,
                    "views": 0,
                    "likes": 0,
                    '__id__':new Date().getTime(),
                    '__isCurrentUserLiked__':false
                }
            ]
        ]

        dispatch({type:Actions.AddTweet,payload:data})
        setText('')
    }
  return (
    <div className="flex flex-1 gap-x-2 my-4 border-gray-800 border-y-2 p-4 ">
        <img src={state?.data?.loggedInUser?.imageData.url} alt={state?.data?.loggedInUser?.imageData.alt}  className='w-[40px] h-[40px] rounded-full mb-2' />
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="What's hapenning ?" className='placeholder:text-gray-600 text-gray-300 p-2 flex-1 resize-none bg-inherit outline-none rounded-md ' rows={5} />
        <button onClick={handleTweet} className='self-end text-white bg-blue-500 px-4 py-1 rounded-md' >{state?.data?.tweetButton?.buttonText}</button>
    </div>
  )
}

export default TweetTextBox