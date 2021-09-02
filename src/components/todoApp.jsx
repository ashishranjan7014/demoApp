import React, { Fragment, useEffect, useState } from 'react';
import ToDoList from './todoList';

const ToDoApp = ({ individualData }) => {
    const [formData, setFormData] = useState({ email: "", name: "", personName: "", taskDesc: "", startDate: "", endDate: "", status: "" });
    let [addData, setAddData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData({ email: "", name: "", personName: "", taskDesc: "", startDate: "", endDate: "", status: "" });
        let tempArr = addData;
        if (isDataExist(formData)) {
        } else {
            tempArr.push(formData);
            localStorage.setItem("data", JSON.stringify(tempArr));
        }

    }

    const isDataExist = (data) => {
        let isDataIsThere = false;
        let parseData = JSON.parse(localStorage.getItem("data"));

        parseData.filter((e) => {
            if (e.email === data.email) {
                console.log(e);
                isDataIsThere = true;
            }
        })

        if (isDataIsThere) {
            parseData.map((e, i) => {
                if (parseData[i].email === data.email) {
                    parseData[i].email = data.email;
                    parseData[i].name = data.name;
                    parseData[i].personName = data.personName;
                    parseData[i].taskDesc = data.taskDesc;
                    parseData[i].startDate = data.startDate;
                    parseData[i].endDate = data.endDate;
                    parseData[i].status = data.status;
                }

            });
            localStorage.setItem("data", JSON.stringify(parseData));
        }

        return isDataIsThere;
    }

    useEffect(()=>{
        setAddData(JSON.parse(localStorage.getItem("data")))
    },[localStorage.getItem("data")]);


    return (
        <Fragment>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div>
                    <label>Email</label>
                    <input name="email" type="text" value={formData.email} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Name</label>
                    <input name="name" type="text" value={formData.name} onChange={handleChange}></input>
                </div>
                <div><label>Person Name</label><input name="personName" type="text" value={formData.personName} onChange={handleChange}></input></div>
                <div><label>Task Description</label><input name="taskDesc" type="text" value={formData.taskDesc} onChange={handleChange}></input></div>
                <div><label>Start Date</label><input name="startDate" type="date" value={formData.startDate} onChange={handleChange}></input></div>
                <div><label>End Date</label><input name="endDate" type="date" value={formData.endDate} onChange={handleChange} /></div>
                <div><label>Status</label><select name="status" value={formData.status} onChange={handleChange}>
                    <option value=""></option>
                    <option value="Planned">Planned</option>
                    <option value="Inprogress">Inprogress</option>
                    <option value="Complete">Complete</option>
                </select>
                </div>
                <button type="submit">Submit</button>
            </form >


            <ToDoList setFormData={setFormData} />
        </Fragment>
    );
}

export default ToDoApp;