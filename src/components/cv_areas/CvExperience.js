import React, { useContext, Fragment } from "react";
import CvContext from "../store/cv-context";
import classes from "./CvExperience.module.css";

const CvExperience = () => {
  const ctx = useContext(CvContext);

  return (
    <Fragment>
      <h3>Work History</h3>
      <div className={classes['work-history-container']}>
        <p>Position: </p>
        <p>{ctx.position}</p>
      </div>
      <div className={classes['work-history-container']}>
        <p>Company: </p>
        <p>{ctx.company}</p>
      </div>
      <div className={classes['work-history-container']}>
        <p>City: </p>
        <p>{ctx.city}</p>
      </div>
      <div className={classes['work-history-container']}>
        <p>From: </p>
        <p>{ctx.jobStartDate}</p>
      </div>
      <div className={classes['work-history-container']}>
        <p>To: </p>
        <p>{ctx.jobEndDate}</p>
      </div>
    </Fragment>
  );
};

export default CvExperience;
