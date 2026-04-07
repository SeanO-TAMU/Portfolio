import styles from './Navbar.module.css'

function Navbar (){
    return (
        <div className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <img src="O'ConnorCrest.gif" alt="O'Connor coat of arms"></img>
                </div>

                <h1 className={styles.title}>Sean O’Connor</h1>
            </div>

            <div className={styles.navLinks}>
                <h2 className={styles.pageTitle}>Home</h2>
                <h2 className={styles.pageTitle}>Projects</h2>
                <h2 className={styles.pageTitle}>About</h2>
                <h2 className={styles.pageTitle}>Resume</h2>
            </div>

        </div>
    )
}

export default Navbar