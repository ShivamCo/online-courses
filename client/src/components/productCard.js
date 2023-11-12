import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const ProductCard = (props) => {
    let navigate = useNavigate();
    const clickHandler = (event) =>{
        const courseName = event.target.value
        
        
        const path = `/course-details/${courseName}`;
        navigate(path)

    }

    return (

        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-95 transition duration-500">
            <h3 className="mb-3 text-lg font-bold text-indigo-600">{props.instructor}</h3>
            <div className="relative">
                <img className="w-full h-52 object-cover rounded-xl" src={props.thumbnail} alt={props.thumbnail}/>
                <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
            </div>
            <button onClick={clickHandler} value={props.courseName} className="mt-4 text-gray-800 text-lg font-bold cursor-pointer">{props.courseName}</button>
            <div className="my-4">
                <div className="flex space-x-1 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <p>{props.duration}</p>
                </div>
                <div className="flex space-x-1 items-center">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0"/></svg>
                    </span>
                    <p>{props.enrollmentStatus}</p>
                </div>
                <div className="flex space-x-1 items-center">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                    </span>
                    <p>{props.courseName}</p>
                </div>
                <button onClick={clickHandler} value={props.courseName} className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">More Info...</button>
            </div>
        </div>

    )


}


export default ProductCard