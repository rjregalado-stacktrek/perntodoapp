//===================== FETCH API ===========================
// import React, { Fragment, useState } from "react";

// const InputTodo = ()=>{

//     const [description, setDescription] = useState("");

//     const onSubmitForm = async e => {
//         e.preventDefault();
//         try {
//             const body = { description };
//             const response = await fetch("http://localhost:5001/todos", {
//                 method: "POST",
//                 headers:  { "Content-Type": "application/json" },
//                 body: JSON.stringify(body)
//             });

//             window.location = "/";
            
//         } catch (err) {
//             console.error(err.message);
            
//         }
//     }

//     return(
//     <Fragment>
//         <h1 className="text-center mt-5">Todo List App</h1>
//         <form className="d-flex mt-5" onSubmit={onSubmitForm}>
//             <input 
//                 type="text" 
//                 className="form-control" 
//                 value={description}
//                 onChange={e=>setDescription(e.target.value)}
//             />

//             <button className="btn btn-success">Add</button>
//         </form>
//     </Fragment>
//     )
// }

// export default InputTodo;

//================ AXIOS LIBRARY ===================

import React, { Fragment, useState } from "react";
import axios from "axios";

const InputTodo = ()=>{

    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:5001/todos", {
            description: description
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };


    return(
    <Fragment>
        <h1 className="text-center mt-5">Todo List App</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input 
                type="text" 
                className="form-control" 
                value={description}
                onChange={e=>setDescription(e.target.value)}
            />

            <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
    )
}

export default InputTodo;
