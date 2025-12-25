import React from 'react'
import Layout from './Layout'
import { FaEdit } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { openDeletePopup, openEmployeePopup } from '../redux/reducer/popup/popupReducer'
import { updateEmployee } from '../redux/reducer/employee/employeeThunk'

const Employees = () => {
    const employees = useSelector(state => state.employee.employees);
    if (!employees) {
        return <p className='text-black font-bold text-2xl'>...Loading</p>
    }
    return (
        <Layout>
            <ul className="list bg-base-100 rounded-box shadow-md mt-1">

                {employees.length===0 && <p>No Employees Found</p> }

                {employees.map((employee) =>
                    <EmployeeCard key={employee.id} employee={employee} />
                )}

                

            </ul>
        </Layout>
    )
}

const EmployeeCard = ({ employee }) => {

    const dispatch = useDispatch();


    const handleHighlight = (employee) => {

        dispatch(updateEmployee({
            id: employee.id,
            details: {
                ...employee,
                highlight: !employee.highlight
            }
        }))
    }

    return (
        <li className="list-row">
            <div><img className="size-10 rounded-box" src={employee.profileUrl} /></div>
            <div>
                <div>{employee.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">{employee.email}</div>
            </div>
            <p className="list-col-wrap text-xs">{employee.bio}</p>
            <div className='flex items-center gap-10'>
                <FaEdit onClick={() => dispatch(openEmployeePopup(employee))} />
                <FaDeleteLeft onClick={() => dispatch(openDeletePopup(employee.id))} />
                <button onClick={() => handleHighlight(employee)} className="btn btn-square btn-ghost">
                    <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round"
                            strokeWidth="2" fill={employee.highlight ? 'red': 'none'} stroke="currentColor">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 
                        .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                            </path>
                        </g>
                    </svg>
                </button>
            </div>
        </li>
    )
}

export default Employees
