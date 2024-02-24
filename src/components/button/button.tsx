import styles from './button.module.css'

export default function Button({ text }: { text: string }) {
    return (
        <button className={styles.btn}>
            {text}
        </button>
    )
}
