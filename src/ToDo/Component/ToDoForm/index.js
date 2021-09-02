import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddToDoList } from "../../Store/Action";


const ToDoForm = () => {
    const taskRef = useRef(null);
    const dispatch = useDispatch();

    const addTask = () => {
        if (taskRef && taskRef.current && taskRef.current.value) {
            dispatch(AddToDoList({ name: taskRef.current.value, color: "black" }));
        }
    }

    return (
        <div style={{ margin: "15px" }}>
            <div>
                <div><label>Add Task</label></div>
                <div><input type="text" name="task" ref={taskRef} /></div>
            </div>
            <div style={{ margin: "15px 0px" }}><button onClick={addTask}>Add Task</button></div>
        </div>
    )
}
export default ToDoForm;