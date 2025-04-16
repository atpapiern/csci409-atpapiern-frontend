export default function DetailsPage({params}){
    return(
        <div>
            <h1>Product Details</h1>
            <h2>Details About Product : {params.productId}</h2>
        </div>
    )
}