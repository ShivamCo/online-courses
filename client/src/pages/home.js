import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/course/courseSlice.js';
import { json } from 'react-router-dom';

const Home = () => {

    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.courses);
    const status = useSelector((state) => state.courses.status);
    const error = useSelector((state) => state.courses.error);

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



    return (
        <div>
            {courses.map((i) => (
                <li key={i.id}>{i.instructor}</li>
            ))}

        </div>

    );

}


export default Home