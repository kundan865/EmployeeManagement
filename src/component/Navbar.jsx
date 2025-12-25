import React, { useState } from 'react'
import Layout from './Layout'
import { FaPlus, } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { closeHighlighPopup, openEmployeePopup, openHighlighPopup } from '../redux/reducer/popup/popupReducer'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const handleHighlight = () => {
        setOpen(open ? false : true)
        if (open) {
            dispatch(closeHighlighPopup())
        } else {
            dispatch(openHighlighPopup())
        }
    }


    return (
        <div className=' sticky top-0 z-10 '>
            <div className=" shadow-sm p-5 bg-amber-300 rounded-sm">

                <Layout>

                    <div className="navbar-start">
                        <a className="btn btn-ghost text-xl">Employees</a>
                    </div>
                    <div className="navbar-end gap-10">
                        <FaPlus onClick={() => dispatch(openEmployeePopup())} />
                        <button className="btn btn-square btn-ghost" onClick={handleHighlight}>
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round"
                                    strokeWidth="2" fill={open ? 'red' : 'none'} stroke="currentColor"><path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 
                            .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 
                            5.5l7 7Z"></path></g></svg>
                        </button>
                    </div>
                </Layout>
            </div>
        </div>
    )
}

export default Navbar
