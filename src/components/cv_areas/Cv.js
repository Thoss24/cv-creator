import CvContext from "../store/cv-context";
import React, { useContext } from "react";

const Cv = () => {

    const ctx = useContext(CvContext);

    return (
        <div>
           <p>{ctx.firstName}</p>
           <p>{ctx.lastName}</p>
           <p>{ctx.title}</p>
           <p>{ctx.addressLineOne}</p>
           <p>{ctx.addressLineTwo}</p>
           <p>{ctx.phoneNumber}</p>
           <p>{ctx.email}</p>
           <p>{ctx.description}</p>
        </div>
    )
};

export default Cv;