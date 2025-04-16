export default function RouteDetailPage({params}){
    return(
        <div>
            <h1>Route Details</h1>
            <h2>Details About Route : {params.route_Id}</h2>
        </div>
    )
}