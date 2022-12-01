
export const ADD_TODO ='ADD_TODO';
export const DELETE_ALL ='DELETE_ALL';
export const REMOVE_TODO= 'REMOVE_TODO';
export const UPDATE_TODO='UPDATE_TODO';
export const FILTER_TODO='FILTER_TODO'

export const addTodo=(payload)=>{
    return{
        type: "ADD_TODO",
        payload

    }
}
export  const deleteAll =()=>{
    return{
        type:DELETE_ALL
    }
}
export const removeTodo=(payload)=>{
    return{
        type:REMOVE_TODO,
        payload
    }
}
export  const handleEditSubmit =(payload)=>{
    return{
        type:UPDATE_TODO,
        payload
    }
}
export  const filterTodo =(payload)=>{
    return{
        type:FILTER_TODO,
        payload
    }
}
