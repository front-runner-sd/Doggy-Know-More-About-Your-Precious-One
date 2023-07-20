import styles from "./top.module.css";
import image_bg from './bgn.png';
const top=()=>{
    return (
        <div>
        <nav>
            <h2 className={styles.header}>Doggy</h2>
        </nav>
            <div className={styles.bg}>
                <img className={styles.bgi} src={image_bg} alt="oops"/>
            </div>
        </div>
    );
}
export default top;