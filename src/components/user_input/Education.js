import classes from './Education.module.css';
import React, { useContext, useRef } from 'react';
import CvContext from '../store/cv-context';
import Button from '../ui/Button';

const Education = () => {
    const ctx = useContext(CvContext);

    const universityName = useRef();
    const universityCity = useRef();
    const degreeSubject = useRef();
    const from = useRef();
    const to = useRef();

    const addEducationHandler = (event) => {
        event.preventDefault();
        ctx.addCvEducation({
            universityName: universityName.current.value,
            universityCity: universityCity.current.value,
            universitySubject: degreeSubject.current.value,
            universityStartDate: from.current.value,
            universityEndDate: to.current.value
        });
    };

    const deleteEducationHandler = (event) => {
        event.preventDefault()
        console.log("test")
        ctx.removeCvEducation({
            universityName: "",
            universityCity: "",
            universitySubject: "",
            universityStartDate: "",
            universityEndDate: ""
        });
    };

    return (
        <form action="" onSubmit={addEducationHandler}>
            <label htmlFor="">Education</label>
            <div className={classes.education}>
                <input type="text" className={classes.input} placeholder="University Name" ref={universityName}/>
                <input type="text" className={classes.input} placeholder="City" ref={universityCity}/>
                <input type="text" className={classes.input} placeholder="Degree Subject" ref={degreeSubject}/>
                <input type="text" className={classes.input} placeholder="From" ref={from}/>
                <input type="text" className={classes.input} placeholder="To" ref={to}/>
            </div>
            <Button name="Update Education"/>
            <Button onClick={deleteEducationHandler} name="Delete Education"/>
        </form>
    )
};

export default Education;