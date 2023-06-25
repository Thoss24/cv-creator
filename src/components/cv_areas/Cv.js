import CvContext from "../store/cv-context";
import CvExperience from "./CvExperience";
import React, { useContext, Fragment } from "react";

const Cv = () => {

    const ctx = useContext(CvContext);

    const test = () => {
        console.log(ctx)
    };

    return (
        <Fragment>
        <div>
           <p>{ctx.firstName}</p>
           <p>{ctx.lastName}</p>
           <p>{ctx.title}</p>
           <p>{ctx.addressLineOne}</p>
           <p>{ctx.addressLineTwo}</p>
           <p>{ctx.phoneNumber}</p>
           <p>{ctx.email}</p>
           <p>{ctx.description}</p>
           <button onClick={test}>TEST</button>
        </div>
       <CvExperience />
        </Fragment>
    )
};

export default Cv;