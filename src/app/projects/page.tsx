"use client";
import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import Card from "@/components/card/card";
import Project from "../types/project"; // Adjust the import path
import ButtonType from "../types/buttonTech"; // Adjust the import path
import ButtonTech from "@/components/buttonTech/buttonTech";
import CS from "../../../public/img/filters/CS.png";
import CPP from "../../../public/img/filters/CPP.png";
import ReactImg from "../../../public/img/filters/ReactJS.png"; // Adjusted import name
import HTML from "../../../public/img/filters/HTML.png";
import AllTechs from "../../../public/img/filters/allTechs.png";
import Spinner from "@/components/spinner/spinner";

export default function Projects() {
    //Buttons
    const initialTechs: ButtonType[] = [
        { name: "C++", route: CPP.src, clicked: false },
        { name: "C#", route: CS.src, clicked: false },
        { name: "ReactJS", route: ReactImg.src, clicked: false }, // Adjusted name
        { name: "HTML", route: HTML.src, clicked: false },
    ];

    //Initial state, fetched projects
    const [projects, setProjects] = useState<Project[]>([]);
    //Handle filters
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
    //Still idk
    const [loading, setLoading] = useState<boolean>(true);
    //Buttons
    const [techs, setTechs] = useState<ButtonType[]>(initialTechs);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/api/projects");
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                setProjects(data);
                setFilteredProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const filtering = (filter: string) => {
        let filteredList = projects.filter((p) => p.tech.some((tech) => tech.includes(filter)));
        setFilteredProjects(filteredList);
        toggleState(filter);

    };

    const clearFilters = () => {
        setFilteredProjects(projects);
        clearClickeds();

    };

    const toggleState = (filter: string) => {
        setTechs(prevTechs =>
            prevTechs.map(tech =>
                ({ ...tech, clicked: tech.name === filter })
            )
        );
    };

    const clearClickeds = () => {
        setTechs(prevTechs =>
            prevTechs.map(tech =>
                ({ ...tech, clicked: false })
            )
        );
    }

    return (
        <div>
            <h1 className={styles.title}>My projects</h1>

            <div className="text-center flex flex-col items-center mb-8">
                <h1 className="text-white">Technologies</h1>
                <div className="flex gap-3">
                    {
                        techs.map((tech) => <ButtonTech
                            key={tech.name}
                            route={tech.route}
                            altText={tech.name}
                            onClick={() => filtering(tech.name)}
                            clicked={tech.clicked}
                        />)
                    }
                    <div>
                        <ButtonTech route={AllTechs.src} altText="Clear filters" onClick={() => clearFilters()} />
                    </div>
                </div>
            </div>

            {/* Projects */}
            {loading ? (
                <div className="flex justify-center items-center w-full">
                    <Spinner />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center px-5">
                    {filteredProjects.map((site) => (
                        <Card project={site} key={site.id} />
                    ))}
                </div>
            )}
        </div>
    );
}
