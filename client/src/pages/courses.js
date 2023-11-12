import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/course/courseSlice.js';

import { useNavigate } from 'react-router-dom';

import ProductCard from "../components/productCard"
import { current } from '@reduxjs/toolkit';


const Courses = () => {

    const dispatch = useDispatch();
    let courses = useSelector((state) => state.courses.courses);
    const status = useSelector((state) => state.courses.status);
    const error = useSelector((state) => state.courses.error);
    let navigate = useNavigate();

    const [menuClicked, setMenuClicked] = useState(false);
    let [filterData, setFilterData] = useState({})
    const [searchResult, setSearchResult] = useState([])
    const [filterCourses, setFilterCourses] = useState(courses);

    console.log(filterData)


    //Filter Logic
    if (filterData.location && filterData.location !== "all") {
        courses = courses.filter((course) => {
            return course.location === filterData.location
        })
    } if (filterData.duration && filterData.duration !== "all") {

        courses = courses.filter((course) => {
            return course.duration === filterData.duration
        })
    } else {
        courses = courses
    }

    //Handle Changes
    const changeHandler = (event) => {
        setFilterData({ ...filterData, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    //Open and close menu in phone
    const menuClick = () => {
        setMenuClicked(current => !current)
    }


    // search bar
    let currentSearchResult = []
    const getCourses = (event) => {
        // courses= JSON.stringify(courses)
        

        event.preventDefault()
        for (let i = 0; i < courses.length; i++) {
            const currentCourse = (JSON.stringify(courses[i])).toLowerCase()
            //    console.log( currentCourse )
            const toSearch = (filterData.search).toLowerCase()


            if (currentCourse.includes(toSearch)) {
                currentSearchResult.push(courses[i])


            }
        }
        setSearchResult(currentSearchResult)
    }
    console.log(searchResult)

    
    const clickToCourse = (event) =>{
        const courseName = event.target.value
        console.log(event.target)
        
        
        const path = `/course-details/${courseName}`;
        navigate(path)

    }




    return (

        <div className="flex h-screen">
            <div onClick={menuClick} className={`sm:hidden flex rounded-full z-30  m-2 shadow-lg w-10 h-10 bg-slate-50 items-center pl-2 fixed`} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d7ddb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7" /></svg></div>
            <div className={`${menuClicked ? "flex" : "hidden"} sm:flex z-10  sm:relative bg-slate-50 max-h-screen fixed sm:w-1/6 w-5/6 `}>
                {/* <div className={`sm:flex-auto ${menuClicked ? "flex" : "hidden" } z-10 absolute sm:relative bg-slate-50 h-screen sm:w-1/6 w-4/6 `}> */}

                <div className=' flex-col flex-1 items-center h-full mt-16 w-1/6 p-4  ' >

                    <form>
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" onChange={changeHandler}  name="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                            <button type="submit" onClick={getCourses} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                    <div className="overflow-y-auto  h-52 ...">
                        {
                            searchResult?.map((ccc) => (


                                
                                
                                    <ul  key={ccc._id} role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <li className="py-3  sm:py-4">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img className="w-8 h-8 rounded-full" src={ccc.thumbnail} alt="Neil image" />
                                                </div>
                                                <div className="flex-1 min-w-0 ms-4">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        {ccc.courseName}
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        {ccc.instructor}
                                                    </p>
                                                </div>
                                                <div className="inline-flex  text-base font-semibold m-4 p-1  rounded-md px-2 items-end text-white bg-blue-500  dark:text-white">
                                                    <button onClick={clickToCourse} value={ccc.courseName}  >More..</button>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    
                                    
                                
                            ))
                        }
                    </div>

                    <label for="large" className="block mb-2 text-xl  font-medium text-gray-900 dark:text-white">Location</label>
                    <select id="large" onChange={changeHandler} name="location" className="block w-full px-4  shadow-lg py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="all" >Choose Location</option>
                        <option value="online">Online</option>


                    </select>

                    <label for="large" className="block mb-2 text-xl  font-medium text-gray-900 dark:text-white">Duration</label>
                    <select id="large" onChange={changeHandler} name="duration" className="block w-full px-4  shadow-lg py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="all" selected>Choose Duration</option>
                        <option value="6 weeks">6 Weeks</option>
                        <option value="8 weeks">8 Weeks</option>
                        <option value="10 weeks">10 Weeks</option>
                        <option value="12 weeks">12 Weeks</option>

                    </select>





                </div>
            </div>

            <div className="flex-auto z-0 m-4 w-5/6 ">
                <div className="flex min-h-screen items-start bg-gradient-to-tr from-slate-100 to-slate-50  flex-1 justify-center mt-16 ">
                    <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                        {courses.map((i) => (

                            <ProductCard
                                instructor={i.instructor}
                                courseName={i.courseName}
                                duration={i.duration}
                                enrollmentStatus={i.enrollmentStatus}
                                thumbnail={i.thumbnail}
                            />
                        ))}



                    </div>
                </div>
            </div>
        </div>













    )

}


export default Courses