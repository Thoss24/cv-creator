import classes from "./PersonalInfo.module.css";
import Button from "../ui/Button";
import CvContext from "../store/cv-context";
import React, { useRef, useContext } from "react";

const PersonalInfo = () => {
  const ctx = useContext(CvContext);

  const firstName = useRef();
  const lastName = useRef();
  const title = useRef();
  const addressLineOne = useRef();
  const addressLineTwo = useRef();
  const addressLinesThree = useRef();
  const phoneNumber = useRef();
  const email = useRef();
  const description = useRef();

  const submitPersonalInfoHandler = (event) => {
    event.preventDefault();
    ctx.addCvInfo({
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      title: title.current.value,
      addressLineOne: addressLineOne.current.value,
      addressLineTwo: addressLineTwo.current.value,
      addressLinesThree: addressLinesThree.current.value,
      phoneNumber: phoneNumber.current.value,
      email: email.current.value,
      description: description.current.value,
    });
  };

  const deletePersonalInfoHandler = (event) => {
    event.preventDefault();
    ctx.removeCvInfo({
      firstName: '',
      lastName: '',
      title: '',
      addressLineOne: '',
      addressLineTwo: '',
      addressLinesThree: '',
      phoneNumber: '',
      email: '',
      description: '',
    });
  };

  return (
    <form
      action=""
      onSubmit={submitPersonalInfoHandler}
    >
      <label>Personal Info</label>
      <div className={classes["personal-info"]}>
        <input
          className={classes.input}
          type="text"
          id="first-name"
          placeholder="First Name"
          ref={firstName}
        />
        <input
          className={classes.input}
          type="text"
          id="last-name"
          placeholder="Last Name"
          ref={lastName}
        />
        <select id="title" name="Title" ref={title} className={classes.input}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Ms">Ms</option>
          <option value="Dr">Dr</option>
          <option value="Professor">Professor</option>
        </select>
        <input
          className={classes.input}
          type="text"
          id="address-1"
          placeholder="Address Line 1"
          ref={addressLineOne}
        />
        <input
          className={classes.input}
          type="text"
          id="address-2"
          placeholder="Address Line 2"
          ref={addressLineTwo}
        />
        <input
          className={classes.input}
          type="text"
          id="address-3"
          placeholder="Address Line 3"
          ref={addressLinesThree}
        />
        <input
          className={classes.input}
          type="number"
          id="phone-number"
          placeholder="Phone Number"
          ref={phoneNumber}
        />
        <input type="email" id="email" placeholder="Email" ref={email} className={classes.input}/>
        <textarea
          className={classes.input}
          type="text"
          id="description"
          placeholder="Description"
          ref={description}
        />
      </div>
      <Button name="Update Personal Info" />
      <Button onClick={deletePersonalInfoHandler} name="Delete Personal Info" />
    </form>
  );
};

export default PersonalInfo;
