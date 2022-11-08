export  const ADD_TODO =(value) => async(dispatch,getState) =>{
    try {
        const data = {
            id:new Date().getTime().toString(),
            value : value
        }
        dispatch({ 
            type: "add_todo",
            payload:data
        })

        localStorage.setItem("list", JSON.stringify(getState().todoReducer.list))
        
    }

    catch(err){
        console.error(err)
    }
    
}


export  const DELETE_TODO =(id)=> async (dispatch,getState) =>{
    try {
        dispatch({
            type: "delete_todo",
            id
        })
        localStorage.setItem("list", JSON.stringify(getState().todoReducer.list))
    }

    catch(err){
        console.error(err)
    }
}
export  const CLEAR_TODO =()=> async (dispatch,getState) =>{
    try {
        dispatch({
            type: "clear_todo",
        })
        localStorage.setItem("list", JSON.stringify(getState().todoReducer.list))
    }

    catch(err){
        console.error(err)
    }
}