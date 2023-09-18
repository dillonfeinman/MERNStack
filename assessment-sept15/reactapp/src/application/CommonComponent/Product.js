
function Product(props){
    const productName = props.productName;
    const productPrice = props.productPrice;

    return (
        <>
            <h1>{productName}:</h1>
            <h1>${productPrice}</h1>
        </>
    )

}