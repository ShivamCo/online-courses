import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enrolledData } from "../features/enrolledSlice";
import ProductCard from "../components/productCard";
import EnrolledCard from "../components/enrolledCard";


const Dashboard = () => {


    
    const [menuClicked, setMenuClicked] = useState(false);
    
    
    const { user, isAuthenticated, isLoading } = useAuth0();
    const dispatch = useDispatch();
    const enrolledDataState = useSelector((state) => state.enrolledData);


    const menuClick = () => {
        setMenuClicked(current => !current)
    }

   

    let requestData
    if (user) {

        requestData = {
            name: user.name,
            email: user.email
        }

    }


    useEffect(() => {

        if (requestData) {
            dispatch(enrolledData(requestData));
        }


    }, [dispatch, requestData]);

    const LogoutButton = () => {
        const { logout } = useAuth0();

        return (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
            </button>
        );
    };

    const LoginButton = () => {
        const { loginWithRedirect } = useAuth0();

        return <button onClick={() => loginWithRedirect()}>Log In</button>;
    };

    

    if (!isLoading) {
        return (
            <>


                {
                    isAuthenticated



                        ?

                        <div className="flex">
                        <div onClick={menuClick} className={`sm:hidden flex rounded-full z-30  m-2 shadow-lg w-10 h-10 bg-slate-50 items-center pl-2 fixed`} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d7ddb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7" /></svg></div>
                        <div className={`${menuClicked ? "flex" : "hidden"} sm:flex flex-col z-10 absolute sm:relative bg-slate-50 max-h-screen sm:w-1/6 w-4/6 `}>
                                <div className="mb-2 p-4">
                                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Student Dashboard</h5>
                                </div>
                                <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
                                    <div role="button" tabindex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                                        <div className="grid place-items-center mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                                                <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        Courses
                                    </div>




                                    <div role="button" tabindex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                                        {
                                            isAuthenticated
                                                ?

                                                <div className=" flex items-center align-middle ml-6 text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-400 dark:focus:ring-red-400">
                                                    <LogoutButton />
                                                </div>
                                                :
                                                <div className=" flex items-center align-middle ml-6 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <LoginButton />
                                                </div>

                                        }
                                    </div>
                                </nav>
                            </div>

                            <div className=" flex w-full z-0 pt-5 px-4 mb-8 mx-auto ">
                                <div className="flex min-h-screen absolute items-start bg-gradient-to-tr from-slate-100 to-slate-50  flex-1 justify-center mt-16 ">
                                    <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">

                                        {(enrolledDataState.data)?.map((i) => (

                                            <EnrolledCard
                                                instructor={i.instructor}
                                                courseName={i.courseName}
                                                duration={i.duration}
                                                enrollmentStatus={i.enrollmentStatus}
                                                thumbnail={i.thumbnail}

                                            />

                                        ))



                                        }

                                    </div>
                                </div>


                            </div>
                        </div>

                        : <div className="flex m-8 items-center w-full" >
                            <h4 className=" text-2xl " >Please Login:</h4>
                            <div className=" hover:cursor-pointer flex items-center  align-middle ml-6 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                                <LoginButton />
                            </div>
                        </div>



                }

            </>
        )
    } else {
        return <div>Loading...</div>
    }

}


export default Dashboard