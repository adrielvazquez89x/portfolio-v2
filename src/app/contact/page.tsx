'use client'
import styles from './contact.module.css';
import btnStyle from '../../components/button/button.module.css';
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';


export default function ContactForm() {

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || '');

  if (state.succeeded) {
    return <>
      <p className={styles.SuccessMessage}>Thanks for your submission!</p>
      <Link href={'/'}>
        <button className={btnStyle.btn}>Back to home</button>
      </Link>
    </>
  }

  return (
    <div className={styles.FormContainer}>
      <div>
        <div>
          <h1>Let's team up and make something awesome!</h1>
          <p> No more waiting around! Let's join forces and bring your ideas to life
            Get in touch with me today and let's kick-start your next project together </p>
        </div>
        <div className='flex justify-around'>
          <Link href={'https://www.linkedin.com/in/adriel-alejandro-vazquez'} target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
          </Link>
          <Link href={'https://github.com/adrielvazquez89x'} target='_blank'>
            <FontAwesomeIcon icon={faGithub} className={styles.icons} />
          </Link>
        </div>

      </div>


      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button type="submit" className={btnStyle.btn} disabled={state.submitting}>
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}