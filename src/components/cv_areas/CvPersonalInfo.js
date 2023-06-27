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
            <strong>M: </strong>
            {ctx.phoneNumber}
          </p>
          <p>
            <strong>E: </strong>
            {ctx.email}
          </p>
        </div>
        <div className={classes.address}>
          <p>{ctx.addressLineOne}</p>
          <p>{ctx.addressLineTwo}</p>
          <p>{ctx.addressLinesThree}</p>
        </div>
      </div>
      <p>{ctx.description}</p>
    </Fragment>
  );
};

export default CvPersonalInfo;
