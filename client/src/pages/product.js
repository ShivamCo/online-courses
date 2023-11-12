
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import courseSlice, { fetchPosts } from '../features/course/courseSlice.js';
import { json, useParams } from 'react-router-dom';
import { studentData } from '../features/enrollSlice.js';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";





const Product = () => {
    const { user, isAuthenticated, isLoading, loginWithRedirect  } = useAuth0();
    
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)
    const dispatch = useDispatch();
    let courses = useSelector((state) => state.courses.courses);
    const status = useSelector((state) => state.courses.status);
    const error = useSelector((state) => state.courses.error);



    const postDataState = useSelector((state) => state.data);
    const [studentInfo, setStudentInfo] = useState({});

    console.log(user)

    const [currentCourse, setCurrentCourse] = useState({})
    let [prerequisites, setPrerequisites] = useState([" "])



    const { course_name } = useParams();
    let cc = {}
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].courseName == course_name) {
            cc = courses[i]

        }
    }
    


    const enrollClick = (event) => {
        const id = event.target.value
        console.log(id)
        if( isAuthenticated ){
            setStudentInfo({
                name: user.name,
                email: user.email,
                course: id
            })
        
        dispatch(studentData({ data: studentInfo }));
        console.log(studentInfo)

        } else {
            
            loginWithRedirect()
        }

    }


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts())


        }
        setCurrentCourse(cc)

        setPrerequisites(JSON.stringify(currentCourse.prerequisites))


    }, [status, dispatch, cc, prerequisites, currentCourse]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }


    const handleClick = () => {

        setClicked(current => !current)


    }










    return (

        <div className=" sm:flex min-h-max sm:flex-row flex-col m-4  "  >
            {/* left side */}
            <div className=" sm:p-4  sm:flex-auto sm:mt-10 sm:ml-16  sm:flex  sm:w-2/6" >
                <div className="  m-2" >
                    <div>
                        <h3 className="m-2 sm:text-3xl text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-slate-600 text-opacity-80` " >{currentCourse.courseName}</h3>
                        <div className=" sm:w-full flex  rounded-lg overflow-hidden  shadow-md " >
                            <img className="  object-cover " src={currentCourse.thumbnail} ></img>
                        </div>
                    </div>
                </div>
            </div>


            {/* Right Side */}

            <div className=" sm:p-4 sm:flex-auto  sm:mt-24 sm:mr-16  sm:w-3/6 " >
                <div className="shadow-xl border-2 border-black border-opacity-10 rounded-lg flex ">
                    <div className="flex flex-col sm:w-4/6">

                        {/* Course Details */}

                        <h3 className="m-4 sm:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-slate-600 text-opacity-80` "  >Course Details</h3>
                        <div className="flex flex-col  " >

                            {/* Course Description */}

                            <div>
                                <p className="ml-4 text-base font text-slate-700 mt-2 mb-4" >{currentCourse.description}</p>
                            </div>

                            <div className=" ml-4 " >

                                {/* Instructor Name */}


                                <div className="flex flex-row m-2">
                                    <svg className="  mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    <p className=" text-lg underline  decoration-red-300 underline-offset-4 text-slate-600 font-semibold mr-2 " >Instructor:</p>
                                    <p className=" text-lg font-light text-slate-600" >{currentCourse.instructor}</p>
                                </div>

                                {/* Course Duration */}

                                <div className="flex flex-row m-2">
                                    <svg className="  mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    <p className=" text-lg underline decoration-red-300 underline-offset-4 text-slate-600 font-semibold mr-2 " >Duration:</p>
                                    <p className=" text-lg font-light text-slate-600" >{currentCourse.duration}</p>
                                </div>

                                {/* Pre-requisites */}

                                <div className="flex flex-row m-2">
                                    <svg className="  mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon></svg>
                                    <p className=" text-lg underline decoration-red-300 underline-offset-4 text-slate-600 font-semibold mr-2 " >Pre-requisites:</p>


                                    {(currentCourse.prerequisites)?.map((i) => <p className='ml-3'>{i}</p>)}





                                </div>

                                {/* Location */}

                                <div className="flex flex-row m-2">
                                    <svg className="  mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <p className=" text-lg underline decoration-red-300 underline-offset-4 text-slate-600 font-semibold mr-2 " >Location:</p>
                                    <p className=" text-lg font-light text-slate-600" >{currentCourse.location}</p>
                                </div>

                                {/* Enrollment Status */}

                                <div className="flex flex-row m-2">
                                    <svg className="  mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" /></svg>
                                    <p className=" text-lg underline decoration-red-300 underline-offset-4 text-slate-600 font-semibold mr-2 " >Enrollment Status:</p>
                                    <p className=" text-lg font-light text-slate-600" >{currentCourse.enrollmentStatus}</p>
                                </div>


                                {/* Schedule */}


                                <div className="flex flex-row m-2">
                                    <svg className="  mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                    <p className=" text-lg underline decoration-red-300 underline-offset-4 text-slate-600 font-semibold mr-2 " >Schedule:</p>
                                    <p className=" text-lg font-light text-slate-600" >{currentCourse.schedule}</p>
                                </div>

                                <button onClick={enrollClick} value={currentCourse._id} type="button" className="text-white bg-green-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-3.5 h-3.5 mr-2" onClick={enrollClick} value={currentCourse._id} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                    </svg>
                                    Enroll Now
                                </button>

                                <button onClick={handleClick} type="button" className=" mt-4 mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Syllabus
                                    <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
                                </button>

                                {/* Syllabus */}


                                <div className={`${clicked ? "flex" : "hidden"} relative z-0 flex-row mt-4 mb-4`} >

                                    <div className="flex flex-col" >




                                        {(currentCourse.syllabus)?.map((i) =>
                                            < >
                                                <div  className=' border-2 m-1 p-1 border-opacity-30' >
                                                    <div className="flex" >
                                                        <p className=" text-lg font-semibold text-slate-700 mr-2 " >Week:</p>
                                                        <p className=" flex align-middle text-lg font-light " >{i.week}</p>
                                                    </div>



                                                    <div className="flex" >
                                                        <p className=" text-lg font-semibold text-slate-700 mr-2 " >Topic:</p>
                                                        <p className=" flex align-middle text-lg font-light " >{i.topic}</p>
                                                    </div>




                                                    <div className="flex" >
                                                        <p className=" text-lg font-semibold text-slate-700 mr-2 " >Content:</p>
                                                        <p className=" flex align-middle text-lg font-light " >{i.content}</p>
                                                    </div>
                                                </div>
                                            </>)

                                        }



                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )





}


export default Product