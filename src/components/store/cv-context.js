import React from "react";

const CvContext = React.createContext({
  firstName: "",
  lastName: "",
  title: "",
  addressLineOne: "",
  addressLineTwo: "",
  addressLinesThree: "",
  phoneNumber: 0,
  email: "",
  description: "",
  position: "",
  company: "",
  city: "",
  jobStartDate: "",
  jobEndDate: "",
  universityName: "",
  universityCity: "",
  universitySubject: "",
  universityStartDate: "",
  universityEndDate: "",
  addCvInfo: (items) => {},
  removeCvInfo: (items) => {},
  addCvExperience: (items) => {},
  removeCvExperience: (items) => {},
  addCvEducation: (items) => {},
  removeCvEducation: (items) => {}
});

export default CvContext;
