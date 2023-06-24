import CvContext from "./cv-context";
import React, { useState } from "react";

const CvProvider = (props) => {

    const defaultCvState = {
        firstName: '',
        lastName: '',
        title: '',
        addressLineOne: '',
        addressLineTwo: '',
        addressLinesThree: '',
        phoneNumber: 0,
        email: '',
        description: '',
        experience: '',
        company: '',
        city: '',
        jobStartDate: '',
        jobEndDate: '',
        universityName: '',
        universityCity: '',
        universitySubject: '',
        universityStartDate: '',
        universityEndDate: '',
    };

    const [personalInfo, setPersonalInfo] = useState(defaultCvState);

    const addCvInfo = (items) => {
        setPersonalInfo(items)
    };

    const removeCvInfo = (items) => {
        setPersonalInfo(items)
    };

    console.log(personalInfo)

    const context = {
        firstName: personalInfo.firstName,
        lastName: personalInfo.lastName,
        title: personalInfo.title,
        addressLineOne: personalInfo.addressLineOne,
        addressLineTwo: personalInfo.addressLineTwo,
        addressLinesThree: personalInfo.addressLinesThree,
        phoneNumber: personalInfo.phoneNumber,
        email: personalInfo.email,
        description: personalInfo.description,
        experience: personalInfo.experience,
        company: personalInfo.company,
        city: personalInfo.city,
        jobStartDate: personalInfo.jobStartDate,
        jobEndDate: personalInfo.jobEndDate,
        universityName: personalInfo.universityName,
        universityCity: personalInfo.universityCity,
        universitySubject: personalInfo.universitySubject,
        universityStartDate: personalInfo.universityStartDate,
        universityEndDate: personalInfo.universityEndDate,
        addCvInfo: addCvInfo,
        removeCvInfo: removeCvInfo
    };

    return (
        <CvContext.Provider value={context}>
            {props.children}
        </CvContext.Provider>
    )
};

export default CvProvider