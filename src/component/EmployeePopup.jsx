import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeEmployeePopup } from '../redux/reducer/popup/popupReducer';
import { postEmployee, updateEmployee } from '../redux/reducer/employee/employeeThunk';

const EmployeePopup = () => {

    const dispatch = useDispatch();
    const [formDetails, setFormDetails] = useState({
        profileUrl: '',
        name: '',
        email: '',
        bio: '',
        highlight: false
    })

    // console.log(formDetails)

    const popup = useSelector(state => state.popup.employeePopup);
    // console.log(popup)

    const handleInputChanege = (e) => {
        const { name, value } = e.target;
        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        if (popup.id) {
            dispatch(updateEmployee({
                id: popup.id,
                details: formDetails
            }))
        } else {
            if(formDetails.bio!=''||formDetails.email!=''||formDetails.bio!=''||formDetails.name!=''){
                await dispatch(postEmployee(formDetails))

            }

        }
        dispatch(closeEmployeePopup())

    }
    useEffect(() => {
        if (popup.id) {
            setFormDetails({
                profileUrl: popup.profileUrl,
                name: popup.name,
                email: popup.email,
                bio: popup.bio,
                highlight: false
            })
        }
        else if (!popup) {
            setFormDetails({
                profileUrl: "",
                name: "",
                email: "",
                bio: "",
                highlight: false
            })
        }

        // dispatch(closeEmployeePopup())
    }, [popup])

    if (!popup) {
        return null;
    }

    return (
        <div onClick={() => dispatch(closeEmployeePopup())}
            className='fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center '>
            <fieldset onClick={(e) => e.stopPropagation()} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-sm font-bold">Employee Details:</legend>

                <label className="label text-sm font-bold">Name:</label>
                <input required onChange={handleInputChanege} name='name' value={formDetails.name}
                    type="text" className="input" placeholder="Name:" />

                <label className="label text-sm font-bold">Profile Url:</label>
                <input required onChange={handleInputChanege} name='profileUrl' value={formDetails.profileUrl}
                    type="text" className="input" placeholder="Profile Url:" />

                <label className="label text-sm font-bold">Email:</label>
                <input required onChange={handleInputChanege} name='email' value={formDetails.email}
                    type="email" className="input" placeholder="Email:" />

                <label className="label text-sm font-bold">Bio:</label>
                <textarea required onChange={handleInputChanege} name='bio' value={formDetails.bio}
                    className='textarea h-24' placeholder='Bio'></textarea>

                <button onClick={handleSubmit} className="btn btn-neutral mt-4">Submit</button>
            </fieldset>
        </div>
    )
}

export default EmployeePopup
