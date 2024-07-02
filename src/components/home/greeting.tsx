import styles from "./home.module.css";

export default function Greeting() {
    return (
        <div className={styles.greetingContainer}>
            <h1><span>Hello there, I&apos;m Adriel Vazquez</span> fullstack developer</h1>
            <p>
                My focus is on continuous learning and growth
                across various programming domains, particularly in web development
                where I specialize in technologies like React and C#/.NET.
                Additionally, I&apos;m expanding my expertise into backend technologies.
            </p>
            <p>
                Apart from web development,
                I&apos;m delving into programming in general and have ventured
                into game development using C++.
                I&apos;m eager to broaden my skill set and take on new challenges.
            </p>
            <p>
                I aspire to secure a position where
                I can apply my knowledge in diverse programming fields,
                contributing to innovative projects.
                I&apos;m genuinely excited about the future
                of programming and web development,
                embracing new opportunities with enthusiasm.
            </p>
        </div>
    )
}
