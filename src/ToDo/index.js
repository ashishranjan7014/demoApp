import { Provider } from "react-redux"; 
import ToDoForm from "./Component/ToDoForm";
import ToDoList from "./Component/ToDoList";
import Store from "./Store";

const ToDoApp=()=>{
    return(
        <Provider store={Store}>
            <ToDoForm />
            <ToDoList />
        </Provider>
    )
}

export default ToDoApp;