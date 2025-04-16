export default function VehicleDetailPage({params}){
    return(
        <div>
            <h1>Vehicle Details</h1>
            <h2>Details About Vehicle : {params.vehicle_Id}</h2>
        </div>
    )
}