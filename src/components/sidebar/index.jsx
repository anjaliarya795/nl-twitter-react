import React, { useContext } from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BiHash} from 'react-icons/bi'
import {AiOutlineBell} from 'react-icons/ai'
import {FaRegEnvelope} from 'react-icons/fa'
import {BsBookmark} from 'react-icons/bs'
import {MdOutlineAccountCircle} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs'
import { GlobalContext } from '../../App'
import { ReactSVG } from 'react-svg'



function SideBar() {
  const {state} = useContext(GlobalContext)
  console.log(state,"sidebar")
  return (
    <div className="flex flex-1 flex-col gap-y-8 ">
      <div className="text-blue-500 text-xl"><BsTwitter/></div>

      {/* {
        state?.data?.sideNavigationButtons?.map(item=>(
          <div className="flex flex-row gap-x-4 items-center">
            <div className="">
            <img src={item.icon.url} alt={item.icon.alt}  style={{aspectRatio:item.icon.aspX/item.icon.aspY}} />
            </div>
            <div className="text-white">{item.buttonText}</div>
          </div>
        ))
      } */}
      <div className="flex flex-row gap-x-4 items-center">
        <AiFillHome color='white' size={22} />
        <div className="text-white">Home</div>
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        <BiHash color='white' size={22} />
        <div className="text-white">Explore</div>
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        <AiOutlineBell color='white' size={22} />
        <div className="text-white">Explore</div>
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        <FaRegEnvelope color='white' size={22} />
        <div className="text-white">Messages</div>
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        <BsBookmark color='white' size={22} />
        <div className="text-white">Bookmark</div>
      </div>
      <div className="flex flex-row gap-x-4 items-center">
        <MdOutlineAccountCircle color='white' size={22} />
        <div className="text-white">Profile</div>
      </div>
    </div>
  )
}

export default SideBar