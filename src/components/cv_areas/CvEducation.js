import React, { useContext, Fragment } from "react";
import CvContext from "../store/cv-context";

const CvEducation = () => {
    const ctx = useContext(CvContext);

    return (
        <Fragment>
            <p>{ctx.universityName}</p>
            <p>{ctx.universityCity}</p>
            <p>{ctx.universitySubject}</p>
            <p>{ctx.universityStartDate}</p>
            <p>{ctx.universityEndDate}</p>
        </Fragment>
    )
};

export default CvEducation;