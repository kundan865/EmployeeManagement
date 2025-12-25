import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDeletePopup } from '../redux/reducer/popup/popupReducer';
import { deleteEmployee, getEmployees } from '../redux/reducer/employee/employeeThunk';

const DeletePopup = () => {

    const dispatch=useDispatch();
    const popup=useSelector(state=>state.popup.deletePopup);
    // console.log(popup)

    if(!popup){
        return null;
    }
    const handleDelte=async ()=>{

        await dispatch(deleteEmployee(popup))
        dispatch(closeDeletePopup())
        dispatch(getEmployees());
    }
    return (

        <div 
            className='fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center '>
            <div className="card w-96 bg-base-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Delete</h2>
                    <p>Are you sure, you want to delete this?</p>
                    <div className="justify-end card-actions mt-6">
                        <button onClick={()=>dispatch(closeDeletePopup())}
                         className="btn btn-primary">No</button>

                        <button onClick={handleDelte} className="btn btn-primary">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePopup
