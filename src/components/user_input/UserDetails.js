import classes from "./UserDetails.module.css";

const UserDetails = () => {
  return (
    <form action="" className={classes.form}>
      <div className={classes["personal-info"]}>
        <label htmlFor="first name">
          <input type="text" id="name" />
        </label>
        <label htmlFor="last-name">
          <input type="text" id="last-name"/>
        </label>
        <label htmlFor="title">
          <input type="text" id="title"/>
        </label>
        <label htmlFor="address">
          <input type="text" id="address"/>
        </label>
        <label htmlFor="phone-number">
          <input type="number" id="phone-number"/>
        </label>
        <label htmlFor="email">
          <input type="email" id="email"/>
        </label>
        <label htmlFor="description">
          <textarea type="text" id="description"/>
        </label>
      </div>
      <div className={classes["experience-info"]}></div>
      <div className={classes["educational-info"]}></div>
    </form>
  );
};

export default UserDetails;
