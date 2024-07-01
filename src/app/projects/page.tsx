'use client';
import { useEffect, useState } from 'react';
import styles from "./projects.module.css";
import Card from "@/components/card/card";
import Project from "../types/project"; // Adjust the import path
import ButtonTech from '@/components/buttonTech/buttonTech';
import CS from "../../../public/img/filters/CS.png";
import CPP from "../../../public/img/filters/CPP.png";
import React from "../../../public/img/filters/ReactJS.png";
import HTML from "../../../public/img/filters/HTML.png";


export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setfilteredProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/api/projects');
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                setProjects(data);
                setfilteredProjects(data);
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            }
        };

        fetchProjects();
    }, []);


    //console.log(projects);

    const filtering = (filtro: string) => {
        let listaNueva = projects.filter((p) => p.tech.some((tech) => tech.includes(filtro)));
        setfilteredProjects(listaNueva);
        console.log(listaNueva);
    };

    const clearFilers = () => {
        setfilteredProjects(projects);
    }


    return (
        <div>
            <h1 className={styles.title}>My projects</h1>

            <div className='text-center flex flex-col items-center mb-8'>
                <h1 className='text-white'>Technologies</h1>
                <div className='flex gap-3'>
                    <ButtonTech route={CPP.src} altText='C++' onClick={() => filtering("C++")} />
                    <ButtonTech route={CS.src} altText='C#' onClick={() => filtering("C#")} />
                    <ButtonTech route={React.src} altText='React JS' onClick={() => filtering("ReactJS")} />
                    <ButtonTech route={HTML.src} altText='HTML5' onClick={() => filtering("HTML")} />
                    <ButtonTech route={CPP.src} altText='C++' onClick={() => clearFilers()} />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center px-5">
                {filteredProjects.map((site) => (
                    <Card project={site} key={site.id} />
                ))}
            </div>
        </div>
    );
}
