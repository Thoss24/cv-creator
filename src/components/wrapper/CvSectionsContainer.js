import classes from './CvSectionsContainer.module.css'

const CvSectionsContainer = (props) => {
    return (
        <div className={classes['cv-sections-container']}>{props.children}</div>
    )
}

export default CvSectionsContainer