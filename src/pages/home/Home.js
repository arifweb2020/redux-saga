import React from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userAsync, newCourse, newCollege } from '../../store/extra-reducers/testSlice';
import { useEffect } from 'react';

// unit testing url - https://vaskort.medium.com/how-to-unit-test-your-custom-react-hook-with-react-testing-library-and-jest-8bdefafdc8a2

function Home(props) {
    const { data, loading, course, college } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAsync())
    }, [dispatch])

    const changeHandler = () => {
        dispatch(newCourse())
    }

    const changeHandler1 = () => {
        dispatch(newCollege("RV College"))
    }

    return (
        <div className='container home__conatiner'>
            <h1>Home page </h1>
            <h3>I am doing {course} from {college}</h3>
            <button onClick={changeHandler}>Change Course</button>  <button onClick={changeHandler1}>Change College</button>
            {
                loading ? "plz wait" :
                    data?.map((ele, i) => {
                        return <p key={i}>{ele.name}</p>
                    })
            }
        </div>
    );
}

export default Home;