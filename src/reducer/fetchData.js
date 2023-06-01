const Actions = {
    LoadingStart:'LoadingStart',
    FetchData:'FetchData',
    Error:'Error',
    AddTweet:'AddTweet',
    Like:'Like',
}

const initialState = {
    loading:false,
    data : {},
    error:null
}

const reducer = (state,action) => {
    switch(action.type) {
        case Actions.LoadingStart : {
            return {...state,loading:true}
        }
        case Actions.FetchData : {
            return {...state,loading:false,data:action.payload}
        }
        case Actions.Error : {
            return {...state,loading:false,error:action.payload}
        }
        case Actions.AddTweet : {
            return {...state,loading:false,data:{...state.data,tweetThreads:[...action.payload,...state.data.tweetThreads]}}
        }
        case Actions.Like : {
            return {...state,loading:false,data:{...state.data,tweetThreads:action.payload}}
        }
        default:
            return state
    }
}


export {
    Actions,initialState,reducer
}