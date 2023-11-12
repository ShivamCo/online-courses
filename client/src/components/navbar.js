import { useEffect, useState } from "react"
import logo from "../images/logo.PNG"
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    const LoginButton = () => {
        const { loginWithRedirect } = useAuth0();

        return <button onClick={() => loginWithRedirect()}>Log In</button>;
    };


    const LogoutButton = () => {
        const { logout } = useAuth0();

        return (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
            </button>
        );
    };

    const [clicked, setClicked] = useState(false)

    const Button = () =>{
        {
           if( isAuthenticated){
                

                return (<div className=" flex items-center align-middle ml-6 text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-500 dark:hover:bg-red-400 dark:focus:ring-red-400">
                    <LogoutButton />
                </div>)}
              else {
                return(<div className=" flex items-center align-middle ml-6 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <LoginButton />
                </div>)}
            
                
        }
    }


    useEffect(()=>{
        
        
    },[])

    

    const navClick = () => {
        setClicked(current => !current)


    }

    return (
        <nav className="divide-y relative z-20" >
            <div className="  flex flex-wrap h-16  sm:h-16 bg-lightGrey bg-opacity-10 m-2 rounded-md shadow-lg shadow-blue-300 " >
                <div className="p-2 sm:pl-12 pl-4 flex flex-1 items-center ">
                    <a className="sm:w-40 flex items-center  w-32 "  href="/">  <img src={logo} alt="logo"></img> </a>
                </div>
                <div className=" hidden flex-2 sm:flex items-center align-middle pr-8 " >
                    <div className=" flex " >

                        
                        <a className="  text-slate-800 hover:blue-300 hover:text-opacity-80 font-semibold ml-2 mr-2 hover:duration-40  " href="/">Courses</a>
                        <a className=" text-slate-800 hover:blue-300 hover:text-opacity-80 font-semibold ml-2 mr-2  hover:duration-40 " href="/dashboard" >Dashboard</a>

                    </div>

                    


                    
                    <Button />





                </div>
                <div onClick={navClick} className=" flex items-center pr-4 " >
                    <svg className=" hover:cursor-pointer sm:hidden duration-700  hover:rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F2833" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </div>
            </div>


            <div className={`${clicked ? "flex" : "hidden"} sm:hidden text-right items-end flex-col z-40  ml-4  pr-8 `}>
                <ul>
                    <li>
                        <a className="  text-slate-600 border-b-2 hover:blue-300  hover:blue-300 hover:text-opacity-80 font-semibold mt-2 ml-2 mr-2 hover:duration-40  " href="/" >Home</a>
                    </li>
                    <li>
                        <a className="  text-slate-600 border-b-2 hover:blue-300  hover:blue-300 hover:text-opacity-80 font-semibold mt-2 ml-2 mr-2 hover:duration-40  " href="/courses">Courses</a>
                    </li>
                    <li>
                        <a className=" text-slate-600 border-b-2 hover:blue-300  hover:blue-300 hover:text-opacity-80 font-semibold mt-2 ml-2 mr-2  hover:duration-40 " href="/dashboard" >Dashboard</a>
                    </li>
                </ul>
                <div className=" flex items-center align-middle ml-6 mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <LoginButton />
                </div>

            </div>


        </nav>


    )

}


export default Navbar