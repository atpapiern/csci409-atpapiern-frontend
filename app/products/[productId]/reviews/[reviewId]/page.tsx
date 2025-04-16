export default function ReviewPage({params}) {
    return (
        <div>
            <h1>Review Page</h1>
            <h2>Product Id : {params.productId}</h2>
            <h2>This is Review : {params.reviewId} of Product : {params.productId}</h2>
        </div>
    )
}