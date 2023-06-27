import CvContext from "../store/cv-context";
import CvExperience from "./CvExperience";
import CvEducation from "./CvEducation";
import CvPersonalInfo from "./CvPersonalInfo";
import React, { useContext, Fragment } from "react";

const Cv = () => {
  const ctx = useContext(CvContext);

  return (
    <Fragment>
      <CvPersonalInfo />
      <CvExperience />
      <CvEducation />
    </Fragment>
  );
};

export default Cv;
