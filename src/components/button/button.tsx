import { ReactNode } from 'react';
import styles from './button.module.css';

export default function Button({ content }: { content: ReactNode }) {
    return (
        <button className={styles.btn}>
            {content}
        </button>
    )
}
