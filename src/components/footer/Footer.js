import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <p>Thoss24</p>
            <a href="https://github.com/Thoss24" target='_blank' rel="noreferrer"><img className={classes.logo} src="/github-mark.png" alt="github logo"/></a>
        </div>
    )
}

export default Footer