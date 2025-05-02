// app/lines/page.tsx
async function fetchLines() {
    const username = 'admin';
    const password = 'secret';
    const auth = Buffer.from(`${username}:${password}`).toString('base64');
    const res = await fetch('http://localhost:8000/lines', {
        headers: {
            Authorization: `Basic ${auth}`,
        },
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch lines');
    return res.json();
}
export default async function LineListPage() {
    const lines = await fetchLines();
    return (
        <div>
            <h1>Available Lines</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {lines.map((line: any) => (
                    <li key={line.id} style={{
                        backgroundColor: line.color,
                        color: line.text_color,
                        padding: '1rem',
                        marginBottom: '0.5rem',
                        borderRadius: '8px'
                    }}>
                        <a href={`/lines/${line.id}`} style={{ textDecoration:
                                'none', color: 'inherit' }}>
                            {line.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}