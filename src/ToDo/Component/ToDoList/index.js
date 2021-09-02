import { useSelector, useDispatch } from "react-redux";
import { UpdateColor, RemoveContent } from "../../Store/Action";
import { GetToDoList } from "../../Store/Selector";


const ToDoList = () => {
    const { toDoList } = useSelector(GetToDoList);
    const dispatch = useDispatch();

    return (
        <div style={{ margin: "15px" }}>
            {toDoList && toDoList.length ?
                toDoList.map(({ name, color }, index) => {
                    return (
                        <div
                            style={{ width: "50%", padding: "5px", border: "1px solid black" }}
                            key={name + color + index}
                        >
                            <strong style={{color,cursor: "pointer"}} onClick={() => dispatch(UpdateColor(index, color === "black" ? "green" : "black"))}>
                            {name}
                            </strong> 
                            <strong onClick={() => { dispatch(RemoveContent(index)) }} style={{ cursor: "pointer", float: "right", color: "red" }}>X</strong>
                        </div>
                    )
                })
                : null}
        </div>
    )
}
export default ToDoList;