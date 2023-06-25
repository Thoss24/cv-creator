import classes from './Experience.module.css';
import React, { useContext, useRef } from 'react';
import CvContext from '../store/cv-context';
import Button from '../ui/Button';

const Experience = () => {

    const position = useRef();
    const company = useRef();
    const city = useRef();
    const startDate = useRef();
    const endDate = useRef();

    const ctx = useContext(CvContext);

    const addExperienceHandler = (event) => {
        event.preventDefault()
        ctx.addCvExperience({
            position: position.current.value,
            company: company.current.value,
            city: city.current.value,
            startDate: startDate.current.value,
            endDate: endDate.current.value
        });
    };

    const removeExperienceHandler = (event) => {
        event.preventDefault()
    };

    return (
        <form action="" onSubmit={addExperienceHandler}>
            <label htmlFor="">Experience</label>
            <div className={classes.experience}>
                <input type="text" placeholder='Experience' className={classes.input} ref={position}/>
                <input type="text" placeholder='Company' className={classes.input} ref={company}/>
                <input type="text" placeholder='City' className={classes.input} ref={city}/>
                <input type="date" placeholder='Start Date' className={classes.input} ref={startDate}/>
                <input type="date" placeholder='End Date' className={classes.input} ref={endDate}/>
            </div>
            <Button name='Add Experience'/>
            <Button onClick={removeExperienceHandler} name="Delete Experience"/>
        </form>
    )
};

/* experience: '',
company: '',
city: '',
jobStartDate: '',
jobEndDate: '', */

export default Experience;