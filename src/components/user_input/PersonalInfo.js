import classes from "./PersonalInfo.module.css"
import Button from "../ui/Button";

import React, { useRef, useState } from "react";

const PersonalInfo = (props) => {

  const firstName = useRef();

  const submitPersonalInfoHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form action="" className={classes.form} onSubmit={submitPersonalInfoHandler}>
      <div className={classes["personal-info"]}>
          <input type="text" id="first-name" placeholder="First Name" ref={firstName}/>
          <input type="text" id="last-name" placeholder="Last Name"/>
          <select id="title" name="Title">
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
            <option value="Professor">Professor</option>
          </select>
          <input type="text" id="address" placeholder="Address Line 1"/>
          <input type="text" id="address" placeholder="Address Line 2"/>
          <input type="text" id="address" placeholder="Address Line 3"/>
          <input type="number" id="phone-number" placeholder="Phone Number"/>
          <input type="email" id="email" placeholder="Email"/>
          <textarea type="text" id="description" placeholder="Description"/>
      </div>
        <Button name='Add Personal Info'/>
    </form>
  );
};

export default PersonalInfo;
