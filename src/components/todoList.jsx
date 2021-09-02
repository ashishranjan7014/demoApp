import React, { useState, useEffect } from 'react';

const ToDoList = ({setFormData}) => {

    const [localData, setLocalData] = useState([]);

    const handleDelete=(index)=>{
        let tempArr=localData;
        tempArr.splice(index,1);
        localStorage.setItem("data", JSON.stringify(tempArr));
        setLocalData([...tempArr]);
    }

    const handleEdit=(editData)=>{
        setFormData({ 
            email:editData.email,
            name: editData.name, 
            personName: editData.personName, 
            taskDesc: editData.taskDesc, 
            startDate: editData.startDate, 
            endDate: editData.endDate,
            status: editData.status
        });
    }

    useEffect(() => {
        setLocalData(JSON.parse(localStorage.getItem("data")))
    }, [localStorage.getItem("data")]);



    return (
        <div>
            {localData && localData.length ?
                localData.map((e, i) => {
                    return (
                        <ul key={i.toString()} style={{margin:"10px",border:"1px solid black"}}>
                            <span style={{float:"right",cursor:"pointer",padding:"3px"}} onClick={()=>{
                                handleEdit(e)
                            }}>Edit</span>
                            <span style={{float:"right",cursor:"pointer",padding:"3px"}} onClick={()=>{
                                handleDelete(i)
                            }}>X</span>
                            <li>{e.email}</li>
                            <li>{e.name}</li>
                            <li>{e.personName}</li>
                            <li>{e.taskDesc}</li>
                            <li>{e.startDate}</li>
                            <li>{e.endDate}</li>
                            <li>{e.status}</li>
                        </ul>
                    )
                })
                :
                null}
        </div >
    );
}

export default ToDoList;