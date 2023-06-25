import React, { useContext } from "react";
import CvContext from "../store/cv-context";

const CvExperience = () => {

    const ctx = useContext(CvContext)

  return (
    <div>
      <p>{ctx.position}</p>
      <p>{ctx.company}</p>
      <p>{ctx.city}</p>
      <p>{ctx.jobStartDate}</p>
      <p>{ctx.jobEndDate}</p>
    </div>
  );
};

export default CvExperience;
