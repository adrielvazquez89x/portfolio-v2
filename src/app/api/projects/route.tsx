import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
    try {
        const { rows } = await sql`Select * from Projects order by Id desc`;
        const projects = rows.map((item) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            git: item.giturl,
            deploy: item.deployurl,
            img: item.imgurl,
            tech: item.tech.split(","),
        }));
        console.log(projects);
        return NextResponse.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
}
