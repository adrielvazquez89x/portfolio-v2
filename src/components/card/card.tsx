import styles from './card.module.css';
import Project from '@/app/types/project';
import Image from 'next/image';
import Button from '../button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Card({ project }: { project: Project }) {
    return (
        <div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.cardFront}>
                        <Image src={project.img} width={300} height={300} alt={project.name} />
                    </div>
                    <div className={styles.cardBack}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p>{project.tech}</p>
                        <div className='flex items-center'>
                            <Link href={project.git} target='_blank'>
                                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                            </Link>
                            <Link href={project.deploy} target='_blank'>
                                <Button content='Demo' />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
