import { ADD_TO_DO_LIST, UPDATE_COLOR, REMOVE_CONTENT } from "../Constant";

const initialState = {
    toDoList: [
        { name: "Go  to the Library", color: "black" },
        { name: "Have lunch", color: "black" },
        { name: "Meet Friends", color: "black" }]
}

const updateToDoList = (arr, payload) => {
    const { position, color } = payload;
    let updateArr = arr;
    updateArr.map((elem, i, arr) => {
        if(arr[position]){
            arr[position].color = color
        }
    })
    return updateArr
}

const removeContent = (arr, payload) => {
    console.log(arr,payload)
    let updateArr = arr;
    updateArr.splice(payload, 1);
    return updateArr
}

const AddToDoList = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(payload)
    switch (type) {
        case ADD_TO_DO_LIST: {
            return ({
                ...state,
                toDoList: [...state.toDoList, payload]
            })
        }
        case UPDATE_COLOR: {
            return ({
                ...state,
                toDoList: updateToDoList(state.toDoList, payload)
            })
        }
        case REMOVE_CONTENT: {
            return ({
                ...state,
                toDoList: removeContent(state.toDoList, payload)
            })
        }
        default: {
            return (state)
        }
    }
}
export { AddToDoList };