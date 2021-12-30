export  const ADD_TODO =(value) =>{
    return{
    type: "add_todo",
    payload:{
        id:new Date().getTime().toString(),
        value : value
    }
}
}
export  const DELETE_TODO =(id)=>{
    return{
    type: "delete_todo",
    id
    }
}
export  const CLEAR_TODO =()=>{
    return{
    type: "clear_todo"
    }
}