import { useAuth0 } from "@auth0/auth0-react";
import { removeStudentData } from "../features/removeSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";


const EnrolledCard = (props) => {

    const [removeData, setRemoveData] = useState({});
    const { user, isAuthenticated, isLoading } = useAuth0();

    const dispatch = useDispatch();
    const removeStudentDataState = useSelector((state) => state.removeStudent);
    const [inputData, setInputData] = useState({});
    const [completed, setCompleted] = useState(false)

    const removeClick = (event) => {
        setInputData({
            email: user.email,
            course: event.target.value
        })
        dispatch(removeStudentData({ data: inputData }));
    };


    const studentWhoCompleted = (props.studentsCompleted).toString()

    // if(studentWhoCompleted.includes(user.email)){
    //     setCompleted(true)
    // }
    

    //  for (let i = 0; i < studentWhoCompleted.length; i++) {

    //      if (studentWhoCompleted[i] == user.email) {
    //          setCompleted(true)
            
    //     } 
        
    //  }



    return (

        <div>
            <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <div className="" >
                        <img className=" object-cover h-72 rounded-t-lg" src={props.thumbnail} alt="" />
                    </div>
                </a>

                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.instructor}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Continue
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a> 
                    <button onClick={removeClick} value={props.courseName} className={`ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white ${studentWhoCompleted.includes(user.email)? " hover:bg-yellow-500 bg-yellow-400 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-600 dark:focus:ring-yellow-500 ": "hover:bg-red-800 bg-red-700 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"} rounded-lg focus:ring-4 focus:outline-none `}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        
                    {studentWhoCompleted.includes(user.email)? "Completed": "Mark Complete"}
                        
                        


                    </button>
                </div>
            </div>
        </div>

    )


}


export default EnrolledCard