import styles from './projects.module.css';

export default async function Projects() {

    const res = await fetch('');

    return (

        <div className='flex sm:flex-col justify-center'>
            {/* card */}
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.cardFront}>
                        <h3>Imagen</h3>
                    </div>
                    <div className={styles.cardBack}>
                        <p>Titulo</p>
                        <p>Descripcion</p>
                        <p>Desarralldo con</p>
                        <p>Botones</p>
                    </div>
                </div>
            </div>
        </div>
    )

}