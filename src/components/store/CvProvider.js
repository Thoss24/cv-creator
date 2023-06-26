import CvContext from "./cv-context";
import React, { useState } from "react";

const CvProvider = (props) => {
  const defaultCvState = {
    firstName: "",
    lastName: "",
    title: "",
    addressLineOne: "",
    addressLineTwo: "",
    addressLinesThree: "",
    phoneNumber: "",
    email: "",
    description: "",
  };

  const defaultExperienceState = {
    position: "",
    company: "",
    city: "",
    jobStartDate: "",
    jobEndDate: "",
  };

  const defaultEducationState = {
    universityName: "",
    universityCity: "",
    universitySubject: "",
    universityStartDate: "",
    universityEndDate: "",
  };

  const [personalInfo, setPersonalInfo] = useState(defaultCvState);
  const [experience, setExperience] = useState(defaultExperienceState);
  const [education, setEducation] = useState(defaultEducationState);

  const addCvInfo = (items) => {
    setPersonalInfo(items);
  };

  const removeCvInfo = (items) => {
    setPersonalInfo(items)
  };

  const addCvExperience = (items) => {
    setExperience(items);
  };

  const removeCvExperience = (items) => {
    setExperience(items)
  };

  const addCvEducation = (items) => {
    setEducation(items);
  };

  const removeCvEducation = (items) => {
    setEducation(items)
    console.log(items)
    console.log(education)
  };


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
    position: experience.position,
    company: experience.company,
    city: experience.city,
    jobStartDate: experience.jobStartDate,
    jobEndDate: experience.jobEndDate,
    universityName: education.universityName,
    universityCity: education.universityCity,
    universitySubject: education.universitySubject,
    universityStartDate: education.universityStartDate,
    universityEndDate: education.universityEndDate,
    addCvInfo: addCvInfo,
    removeCvInfo: removeCvInfo,
    addCvExperience: addCvExperience,
    removeCvExperience: removeCvExperience,
    addCvEducation: addCvEducation,
    removeCvEducation: removeCvEducation
  };

  return (
    <CvContext.Provider value={context}>{props.children}</CvContext.Provider>
  );
};

export default CvProvider;
