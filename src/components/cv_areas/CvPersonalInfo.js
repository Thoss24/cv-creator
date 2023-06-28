import React, { useContext, Fragment } from "react";
import CvContext from "../store/cv-context";
import classes from "./CvPersonalInfo.module.css";

const CvPersonalInfo = () => {
  const ctx = useContext(CvContext);

  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes.name}>
          <h3>{ctx.title}</h3>
          <h1>
            {ctx.firstName} {ctx.lastName}
          </h1>
        </div>
        <div className={classes["contact-info"]}>
          <p>
            <strong>Mobile: </strong>
            {ctx.phoneNumber}
          </p>
          <p>
            <strong>Email: </strong>
            {ctx.email}
          </p>
        </div>
        <div className={classes.address}>
          <p>{ctx.addressLineOne}</p>
          <p>{ctx.addressLineTwo}</p>
          <p>{ctx.addressLinesThree}</p>
        </div>
      </div>
      <div className={classes.divider}></div>
      <div className={classes['description-container']}>
      <h3>Professional Summary</h3>
      <p>{ctx.description}</p>
      </div>
    </Fragment>
  );
};

export default CvPersonalInfo;
