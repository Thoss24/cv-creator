import classes from './CvContainer.module.css';

const CvContainer = (props) => {
    return (
        <div className={classes['cv-container']}>{props.children}</div>
    )
}

export default CvContainer