// app/vehicles/page.tsx
async function fetchVehicles() {
    const username = 'admin';
    const password = 'secret';
    const auth = Buffer.from(`${username}:${password}`).toString('base64');
    const res = await fetch('http://localhost:8000/Vehicles', {
        headers: {
            Authorization: `Basic ${auth}`,
        },
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch vehicles');
    return res.json();
}
export default async function VehicleListPage() {
    const vehicles = await fetchVehicles();
    return (
        <div>
            <h1>Available Vehicles</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {vehicles.map((vehicle: any) => (
                    <li key={vehicle.id} style={{
                        backgroundColor: vehicle.color,
                        color: vehicle.text_color,
                        padding: '1rem',
                        marginBottom: '0.5rem',
                        borderRadius: '8px'
                    }}>
                        <a href={`/vehicles/${vehicle.id}`} style={{ textDecoration:
                                'none', color: 'inherit' }}>
                            {vehicle.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}