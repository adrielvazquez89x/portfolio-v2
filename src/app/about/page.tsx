import Image from "next/image";
import profile from "../../../public/img/profile2.jpg";
import styles from "./about.module.css";

export default function About() {
    return (
        <div className="lg:flex w-full mx-auto px-4">
            <div className="lg:w-1/2 lg:pr-4">
                <div className={styles.aboutContainer}>
                    <h1>Discover More About Me</h1>
                    <p>
                        I&apos;m Adriel Alejandro Vazquez, and I&apos;m in the last year of the
                        <i>Técnico Universitario en Programación</i> degree at <i>Universidad Tecnológica Nacional</i> (UTN) with outstanding grades.
                        I also undertook several development courses to expand my knowledge in this field.
                    </p>
                    <p>
                        Perseverance is key for me. Although I don&apos;t have professional experience yet, I&apos;m determined to learn
                        and grow in the development field.
                        When it comes to tech, React is my go-to tool. I&apos;m well-versed in HTML, CSS, and JS/TS too. Additionally,
                        I have become quite proficient in .NET technology, and over time, its versatility and potential have fascinated me even more.
                        I now have a deep appreciation for how much it allows me to create powerful and scalable solutions.
                    </p>
                    <p>
                        I find development incredibly fun and fulfilling.
                        Besides coding, I have a passion for music and I play the guitar. Video games are also a big part of my life,
                        and I enjoy delving into game development, though I&apos;m not an expert in this area yet.
                        My main goal is to land a job in development and keep pushing my skills to the next level. If you&apos;re looking for a dedicated and enthusiastic developer, I&apos;d love to connect!
                        Feel free to reach out if you have any questions or exciting projects in mind.
                    </p>
                </div>
            </div>
            <div className="lg:w-1/2 m-auto lg:items-center">
                <Image src={profile} width={960} height={645} alt="" />
                <p className="text-white text-xs">This is me, playing guitar in my previous band</p>
            </div>
        </div>
    );
}
