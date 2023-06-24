import React from "react"

const CvContext = React.createContext({
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
    addCvInfo: (items) => {},
    removeCvInfo: (items) => {}
});

export default CvContext