import styles from './index.module.css';

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
}

const Button = ({ children, onClick, type = 'primary' }: IButton) => {
  return (
    <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
