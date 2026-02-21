import styles from '../css/Auth.module.css'
import openeye from './eye.png';
import closedeye from './eye-closed.png';

const PasswordToggle = ({ show, onToggle }) => {
  return (
    <img
      src={show ? openeye : closedeye}
      className={styles.icon}
      onClick={onToggle}
      alt={show ? "Ocultar senha" : "Mostrar senha"}
      onChange={onToggle}
    />
  );
};

export default PasswordToggle;