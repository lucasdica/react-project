import styles from "./Footer.module.css"
import logo from '../../assets/logo.png';

function Footer(){
    return(<footer className={styles.pie}>
        <img src={logo} alt="Alura"/>
    </footer>)

}
export default Footer