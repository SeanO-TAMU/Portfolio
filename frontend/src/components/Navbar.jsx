import styles from './Navbar.module.css'
import {Link} from "react-router-dom";

function Navbar (){
    return (
        <div className={styles.nav}>
            
            <div className={styles.imgContainer}>
                <img src="O'ConnorCrest.gif" alt="O'Connor coat of arms"></img>
            </div>
            <div className={styles.text}>
                <h1 className={styles.title}>Sean O’Connor</h1>

                <div className={styles.navLinks}>
                    <h2 className={styles.pageTitle}><Link to="/" className={styles.link}>Home</Link></h2>
                    <h2 className={styles.pageTitle}><Link to="/projects" className={styles.link}>Projects</Link></h2>
                    <h2 className={styles.pageTitle}><Link to="/about" className={styles.link}>About</Link></h2>
                    <h2 className={styles.pageTitle}><Link to="/resume" className={styles.link}>Resume</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Navbar