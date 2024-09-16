"use client"
import html5 from "../../../public/img/icons/html.png";
import css3 from "../../../public/img/icons/css.png";
import JS from "../../../public/img/icons/js.png";
import TS from "../../../public/img/icons/ts.png";
import react from "../../../public/img/icons/react.png";
import cpp from "../../../public/img/icons/cpp.png";
import cSharp from "../../../public/img/icons/csharp.png";
import dotnet from "../../../public/img/icons/dotnet.png";
import sql from "../../../public/img/icons/sql.png";

import Image from "next/image";


export default function Techs({ project }: { project: string[] }) {

    const icons = [
        { name: "html", icon: html5.src },
        { name: "css", icon: css3.src },
        { name: "js", icon: JS.src },
        { name: "ts", icon: TS.src },
        { name: "reactjs", icon: react.src },
        { name: "c++", icon: cpp.src },
        { name: "c#", icon: cSharp.src },
        { name: ".net", icon: dotnet.src },
        { name: "sql", icon: sql.src }

    ]

    const projectTechs: string[] = []

    for (let i of icons) {
        for (let t of project) {

            if (t.toLowerCase().includes(i.name.toLowerCase())) {
                projectTechs.push(i.icon);
            }
        }
    }

    return (
        <div className="flex">
            {projectTechs.map((link, index) => <Image src={link} width={24} height={24} alt="tech" className="mx-1 mb-5" key={index} />)}
        </div>
    )
}
