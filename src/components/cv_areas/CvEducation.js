import React, { useContext, Fragment } from "react";
import CvContext from "../store/cv-context";
import classes from './CvEducation.module.css';

const CvEducation = () => {
  const ctx = useContext(CvContext);

  return (
    <Fragment>
      <h3>Education</h3>
      <div className={classes['education-info-container']}>
        <p>University name: </p>
        <p>{ctx.universityName}</p>
      </div>
      <div className={classes['education-info-container']}>
        <p>City: </p>
        <p>{ctx.universityCity}</p>
      </div>
      <div className={classes['education-info-container']}>
        <p>Subject: </p>
        <p>{ctx.universitySubject}</p>
      </div>
      <div className={classes['education-info-container']}>
        <p>From: </p>
        <p>{ctx.universityStartDate}</p>
      </div>
      <div className={classes['education-info-container']}>
        <p>To: </p>
        <p>{ctx.universityEndDate}</p>
      </div>
    </Fragment>
  );
};

export default CvEducation;
