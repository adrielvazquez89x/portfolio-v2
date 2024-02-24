import Image from 'next/image';
import profile from '../../../public/img/profile2.jpg';
import styles from './about.module.css'

export default function About() {
    return (
        <div>
            <div className={styles.aboutContainer}>
                <h1>Discover More About Me</h1>
                <p>
                    I'm Adriel Alejandro Vazquez, and I've recently completed the first semester of the <i>Técnico Universitario en Programación</i> degree at <i>Universidad Tecnológica Nacional</i> (UTN) with outstanding grades.
                    I also undertook a 6-month Frontend development course at Coderhouse to expand my knowledge in this field.
                </p>
                <p>
                    I've also been exploring other courses on my own.
                    Perseverance is key for me. Although I don't have professional experience yet, I'm determined to learn and grow in the web development field.
                    When it comes to tech, React is my go-to tool. I'm well-versed in HTML, CSS, and JS too. Also, I have to say I'm really drawn to .NET technology lately. Its versatility and potential have truly captivated me.
                    I'm thoroughly enjoying diving into the world of .NET.
                </p>
                <p>
                    I find web development incredibly fun and fulfilling.
                    Outside of coding, I have a passion for music and I play the guitar. Video games are also a big part of my life.
                    My main goal is to land a job in web development and keep pushing my skills to the next level. If you're looking for a dedicated and enthusiastic web developer, I'd love to connect!
                    Feel free to reach out if you have any questions or exciting projects in mind.
                </p>
            </div>
            <div className='m-auto'>
                <Image src={profile} width={960} height={645} alt="" />
                <p className='text-white text-xs'>This is me, playing guitar in my previous band</p>
            </div>
        </div>

    )
}
