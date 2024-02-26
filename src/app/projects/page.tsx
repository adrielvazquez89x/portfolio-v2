import styles from "./projects.module.css";
import Card from "@/components/card/card";
import projects from "../../data/projects";
import Project from "../types/project";

export default function Projects() {

    const sites: Project[] = projects;

    return (

        <div>
            <h1 className={styles.title}>My projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center px-5">
                {
                    sites.map((site) => (
                        <Card project={site} key={site.id} />

                    ))
                }
            </div>
        </div>
    )

}