import { sql } from "@vercel/postgres";

export default async function Cart({
    
}: {
    
}): Promise<JSX.Element> {
    const { rows } = await sql`SELECT * from projects`;

    return (
        <div>
            {rows.map((row) => (
                <div key={row.id}>
                    {row.id} - {row.quantity}
                </div>
            ))}
        </div>
    );
} 