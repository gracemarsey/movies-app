import styles from './index.module.css';
import Input from '../Input';
import { useState } from 'react';
import Button from '../Button';

interface ILoginForm {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm = ({ onSubmit }: ILoginForm) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input type="email" placeholder="Email" name="email" value={email} setValue={setEmail} />
      <Input type="password" placeholder="Password" name="password" value={password} setValue={setPassword} />
      <Button type="primary" onClick={handleSubmit}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
