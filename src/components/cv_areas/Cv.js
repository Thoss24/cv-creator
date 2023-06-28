import CvContext from "../store/cv-context";
import CvExperience from "./CvExperience";
import CvEducation from "./CvEducation";
import CvPersonalInfo from "./CvPersonalInfo";
import React, { useContext, Fragment } from "react";
import classes from './Cv.module.css';

const Cv = () => {
  const ctx = useContext(CvContext);

  return (
    <div className={classes['cv-container']}>
      <CvPersonalInfo />
      <CvExperience />
      <CvEducation />
    </div>
  );
};

export default Cv;
