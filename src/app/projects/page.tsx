import styles from "./projects.module.css";
import Card from "@/components/card/card";
import Project from "../types/project";
import { sql } from "@vercel/postgres";


export default async function Projects() {

    const { rows } = await sql`SELECT * FROM projects`;
    
    const projects: Project[] = [];
    
    for (const item of rows) {
        let aux: Project = {
            id: item.id,
            name: item.name,
            description: item.description,
            git: item.giturl,
            deploy: item.deployurl,
            img: item.imgurl,
            tech: item.tech.split(",")
        }
        projects.push(aux);
    }
    
    //console.log(projects);
    
    return (

        <div>
            <h1 className={styles.title}>My projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center px-5">
                {
                    projects.map((site) => (
                        <Card project={site} key={site.id} />

                    ))
                }
            </div>
        </div>
    )

}