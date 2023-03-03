import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function About(props) {

    const dispatch = useDispatch();

    const { name, tech } = useSelector(state => state.nameList)
    const { data } = useSelector(state => state.listNew)
    const cngName = () => {
        // for hard code chnage
        // dispatch({type:"CHANGE_NAME",payload:"Hussain"})
        dispatch({ type: 'CHANGE_NAME' })
    }
    const cngTech = () => {
        // for hard code chnage
        // dispatch({type:"CHANGE_NAME",payload:"Hussain"})
        dispatch({ type: 'CHANGE_TECH' })
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_DATA' })
    }, [dispatch])

    return (
        <div className='about__container'>

            <h1>About Redux Saga</h1>
            <p>Username - {name} </p>
            <p>Tech - {tech} </p>
            <button onClick={cngName}>change name</button>   <button onClick={cngTech}>change tech</button>

            <div>
                <h1>Saga API Call</h1>
                {
                    data?.map((ele) => {
                        return <p>{ele?.name}</p>
                    })
                }
            </div>
        </div>
    );
}

export default About;