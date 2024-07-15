import { useForm } from 'react-hook-form';
import styles from '../styles/Form.module.css';
import React, {useState, useEffect} from 'react'

function ContactForm() {

  const onSubmit = (data) => {
    console.log(data);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <form onSubmit={(onSubmit)} className={styles.form}>
      <div>
        <label htmlFor="ime">ime:</label>
        <input
            type="text"
            id="inputForUsername"
            placeholder="IME"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
      </div>
      <div>
        <label htmlFor="password">lozinka:</label>
        <input
            type="password"
            id="inputForPassword"
            placeholder="LOZINKA"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      </div>
      <button type="submit">Potvrdi</button>
    </form>
  );
}
export default ContactForm;
