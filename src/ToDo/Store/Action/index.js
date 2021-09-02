import { ADD_TO_DO_LIST, UPDATE_COLOR, REMOVE_CONTENT } from "../Constant";

const AddToDoList = (content) => {
    return ({
        type: ADD_TO_DO_LIST,
        payload: content
    })
}

const UpdateColor = (position, color) => {
    return ({
        type: UPDATE_COLOR,
        payload: { position, color }
    })
}

const RemoveContent = (index) => {
    return ({
        type: REMOVE_CONTENT,
        payload: index
    })
}

export { AddToDoList, UpdateColor, RemoveContent };