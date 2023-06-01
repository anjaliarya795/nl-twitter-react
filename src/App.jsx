import React, { createContext, useEffect, useReducer } from 'react'
import HomePage from './pages/Home'
import { Actions, initialState, reducer } from './reducer/fetchData'
import axios from 'axios'
import Loading from './components/loading'

export const GlobalContext = createContext()

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(()=>{
    const fetchData = async () => {
      try{
        dispatch({type:Actions.LoadingStart})
        const res = await axios('https://sandbox.nextleap.app/page/fetch')
        console.log(res.data,"before")
        
        res?.data?.tweetThreads?.forEach((item,i)=>{
          item.forEach((val,valId)=>{
              val['__id__'] = `${i}_${valId}`
              val['__isCurrentUserLiked__'] = false
        })
      })
      console.log(res.data)
        dispatch({type:Actions.FetchData,payload:res.data})
      }catch(err){
        dispatch({type:Actions.Error,payload:res.data})
      }
    }
    fetchData()
  },[])

  if(state.loading){
    return (
      <Loading/>
    )
  }

  return (
    <GlobalContext.Provider value={{state,dispatch}} >
      <HomePage />
    </GlobalContext.Provider>
  )
}

export default App